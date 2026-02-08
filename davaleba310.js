// Custom Error კლასი 
class TaskError extends Error {
  constructor(message) {
    super(message);
    this.name = "TaskError";
  }
}


// Task კლასი

class Task {
  constructor({ id, title, description, priority, dueDate, status }) {
    if (!title || typeof title !== "string") {
      throw new TaskError("Title is required and must be a string.");
    }

    this.id = id ?? String(Date.now()) + Math.random().toString(16).slice(2);
    this.title = title.trim();
    this.description = (description || "").trim();
    this.priority = priority || "medium"; 
    this.dueDate = dueDate || null;       
    this.status = status || "pending";    
  }
}

class TaskManager {
  constructor(storageKey = "davaleba310-tasks") {
    this.storageKey = storageKey;
    this.tasks = [];
  }

  // localStorageდან chatvirtva try/catch
  load() {
    try {
      const raw = localStorage.getItem(this.storageKey);
      if (!raw) {
        this.tasks = [];
        return;
      }
      const arr = JSON.parse(raw);
      if (!Array.isArray(arr)) throw new Error("Invalid data format");
      // crude ობიექტების გარდაქმნა Task კლასის ინსტანციებად
      this.tasks = arr.map((t) => new Task(t));
    } catch (err) {
      throw new Error("Failed to load tasks from localStorage.");
    }
  }

  // taskების shenaxva localStorage-ში da shecdomis damushaveba
  save() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.tasks));
    } catch (err) {
      throw new Error("Failed to save tasks. Storage might be full.");
    }
  }

  // ფილტრაცია (პრიორიტეტისა და სტატუსის მიხედვით)
  getFiltered(priority = "all", status = "all") {
    return this.tasks.filter((t) => {
      const okPriority = priority === "all" || t.priority === priority;
      const okStatus = status === "all" || t.status === status;
      return okPriority && okStatus;
    });
  }

  // ახალი ტასკის დამატება შენახვა
  add(taskData) {
    const task = new Task(taskData);
    this.tasks.push(task);
    this.save();
    return task;
  }

  //განახლება taskის
  update(id, updates) {
    const task = this.tasks.find((t) => t.id === id);
    if (!task) throw new TaskError("Task not found.");

    if (updates.title !== undefined) {
      if (!updates.title.trim()) throw new TaskError("Title cannot be empty.");
      task.title = updates.title.trim();
    }
    if (updates.description !== undefined) task.description = updates.description.trim();
    if (updates.priority !== undefined) task.priority = updates.priority;
    if (updates.dueDate !== undefined) task.dueDate = updates.dueDate || null;
    if (updates.status !== undefined) task.status = updates.status;

    this.save();
    return task;
  }

  // remove
  remove(id) {
    const i = this.tasks.findIndex((t) => t.id === id);
    if (i === -1) throw new TaskError("Task not found.");
    this.tasks.splice(i, 1);
    this.save();
  }
}


// Async დამხმარეები (ფეიქ API + retry)

function delay(ms) {
  // მარტივი Promise, რომელიც setTimeout-ს იყენებს API-ს დაყოვნებისთვის
  return new Promise((res) => setTimeout(res, ms));
}



async function fakeApi(actionName, fn) {
  await delay(300); // Network-ის იმიტაცია

  // 30% shansi ro error moxdes
  if (Math.random() < 0.3) {
    throw new Error(`${actionName} failed (fake API error).`);
  }
  return fn();
}


// tu pirveli cda chavarda, cdilobs meorejer, anu error gamotanis albatoba 30%*30%=9%
async function withRetry(taskFn, actionName, retries = 1) {
  let lastError;
  for (let i = 0; i <= retries; i++) {
    try {
      return await fakeApi(actionName, taskFn);
    } catch (err) {
      lastError = err;
      console.warn(`Attempt ${i + 1} for ${actionName} failed:`, err.message);
      if (i < retries) await delay(300);
    }
  }
  throw lastError;
}


// DOM ელემენტების ამოღება (UI references)

const notificationsEl = document.getElementById("notifications");
const errorsEl = document.getElementById("errors");
const loadingEl = document.getElementById("loading-indicator");

const taskListEl = document.getElementById("task-list");

const taskForm = document.getElementById("task-form");
const taskIdInput = document.getElementById("task-id");
const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const priorityInput = document.getElementById("priority");
const dueDateInput = document.getElementById("dueDate");

const filterPrioritySelect = document.getElementById("filter-priority");
const filterStatusSelect = document.getElementById("filter-status");
const reloadButton = document.getElementById("reload-tasks");
const resetFormButton = document.getElementById("reset-form");

// custom delete confirm modal references
const confirmModal = document.getElementById("confirm-modal");
const confirmText = document.getElementById("confirm-text");
const confirmCancelBtn = document.getElementById("confirm-cancel");
const confirmOkBtn = document.getElementById("confirm-ok");
let pendingDeleteId = null;


// UI Helper functions
function clearMessages() {
  notificationsEl.textContent = "";
  errorsEl.textContent = "";
}

function showNotification(msg) {
  notificationsEl.textContent = msg;
  errorsEl.textContent = "";
}

// საერთო error handler UI-სთვის (message + console.error)
function showError(err) {
  const msg = typeof err === "string" ? err : err.message || "Unknown error";
  errorsEl.textContent = "⚠️ " + msg;
  notificationsEl.textContent = "";
  console.error(err);
}

// loading indicator-ის ჩვენება/დამალვა
function setLoading(isLoading) {
  loadingEl.style.display = isLoading ? "inline-block" : "none";
}

function priorityBadgeClass(priority) {
  if (priority === "high") return "badge badge-high";
  if (priority === "low") return "badge badge-low";
  return "badge badge-medium";
}


// ტასკების რენდერი UI-ში (Read → DOM)

function renderTasks(tasks) {
  taskListEl.innerHTML = "";

  // თუ არაფერია, ვაჩვენებთ მარტივ ტექსტს
  if (!tasks.length) {
    const li = document.createElement("li");
    li.textContent = "No tasks found.";
    li.style.fontSize = "12px";
    li.style.color = "#9ca3af";
    taskListEl.appendChild(li);
    return;
  }

  // თითოეული Task ობიექტის გარდაქმნა LI ელემენტად
  tasks.forEach((t) => {
    const li = document.createElement("li");
    li.className = "task-item";
    li.dataset.id = t.id;

    const header = document.createElement("div");
    header.className = "task-header";

    const titleSpan = document.createElement("span");
    titleSpan.className = "task-title";
    titleSpan.textContent = t.title;
    if (t.status === "completed") titleSpan.classList.add("task-completed");

    const badges = document.createElement("div");
    badges.className = "badges";

    const prBadge = document.createElement("span");
    prBadge.className = priorityBadgeClass(t.priority) + " badge";
    prBadge.textContent = t.priority.toUpperCase();

    const stBadge = document.createElement("span");
    stBadge.className = "badge badge-status";
    stBadge.textContent = t.status === "completed" ? "COMPLETED" : "PENDING";

    badges.appendChild(prBadge);
    badges.appendChild(stBadge);

    header.appendChild(titleSpan);
    header.appendChild(badges);

    const meta = document.createElement("div");
    meta.className = "task-meta";
    const parts = [];
    if (t.description) parts.push(t.description);
    if (t.dueDate) parts.push("Due: " + t.dueDate);
    meta.textContent = parts.join(" • ");

    const actions = document.createElement("div");
    actions.className = "task-actions";

    const toggleBtn = document.createElement("button");
    toggleBtn.className = "btn btn-secondary";
    toggleBtn.dataset.action = "toggle";
    toggleBtn.textContent = t.status === "completed" ? "Mark pending" : "Mark done";

    const editBtn = document.createElement("button");
    editBtn.className = "btn btn-secondary";
    editBtn.dataset.action = "edit";
    editBtn.textContent = "Edit";

    const delBtn = document.createElement("button");
    delBtn.className = "btn btn-secondary";
    delBtn.dataset.action = "delete";
    delBtn.style.background = "#7f1d1d";
    delBtn.style.borderColor = "#991b1b";
    delBtn.textContent = "Delete";

    actions.append(toggleBtn, editBtn, delBtn);

    li.append(header, meta, actions);
    taskListEl.appendChild(li);
  });
}


// მთავარი აპ ლოგიკა (CRUD + async)

const manager = new TaskManager();

async function loadTasks(showMessage = false) {
  setLoading(true);
  clearMessages();
  try {
    // localStorage-დან ჩატვირთვა fake API + retry-ით
    await withRetry(() => manager.load(), "load tasks");
    const tasks = manager.getFiltered(
      filterPrioritySelect.value,
      filterStatusSelect.value
    );
    renderTasks(tasks);
    if (showMessage) showNotification("Tasks loaded.");
  } catch (err) {
    showError(err);
  } finally {
    setLoading(false);
  }
}

// Form-ის submit → Create ან Update ტასკი
async function handleSubmit(e) {
  e.preventDefault();
  clearMessages();

  const id = taskIdInput.value || null;
  const title = titleInput.value;
  const description = descriptionInput.value;
  const priority = priorityInput.value;
  const dueDate = dueDateInput.value || null;

  try {
    if (!title.trim()) throw new TaskError("Title is required.");
    setLoading(true);

    if (!id) {
      // ახალი ტასკის შექმნა
      await withRetry(
        () => manager.add({ title, description, priority, dueDate }),
        "create task"
      );
      showNotification("Task created.");
    } else {
      // ტასკის განახლება
      await withRetry(
        () => manager.update(id, { title, description, priority, dueDate }),
        "update task"
      );
      showNotification("Task updated.");
    }

    taskForm.reset();
    taskIdInput.value = "";
    await loadTasks(false);
  } catch (err) {
    if (err instanceof TaskError) showError(err);
    else showError("Unexpected error while saving task.");
  } finally {
    setLoading(false);
  }
}

// edit-ისთვის
function fillForm(task) {
  taskIdInput.value = task.id;
  titleInput.value = task.title;
  descriptionInput.value = task.description;
  priorityInput.value = task.priority;
  dueDateInput.value = task.dueDate || "";
}

// Task list-ზე ქლიქების დამუშავება (toggle, edit, delete)
async function handleListClick(e) {
  const action = e.target.dataset.action;
  if (!action) return;

  const li = e.target.closest(".task-item");
  if (!li) return;
  const id = li.dataset.id;

  clearMessages();

  try {
    setLoading(true);

    if (action === "toggle") {
      // სტატუსის (completed/pending) გადართვა
      const t = manager.tasks.find((x) => x.id === id);
      if (!t) throw new TaskError("Task not found.");
      const newStatus = t.status === "completed" ? "pending" : "completed";
      await withRetry(
        () => manager.update(id, { status: newStatus }),
        "toggle status"
      );
      showNotification("Status changed.");
      await loadTasks(false);
    }

    if (action === "edit") {
      const t = manager.tasks.find((x) => x.id === id);
      if (!t) throw new TaskError("Task not found.");
      fillForm(t);
      showNotification("Editing mode.");
    }

    if (action === "delete") {
      pendingDeleteId = id;
      if (confirmModal && confirmText) {
        confirmText.textContent = "Are you sure you want to delete this task?";
        confirmModal.classList.add("is-open");
      }
      setLoading(false);
      return;
    }
  } catch (err) {
    if (err instanceof TaskError) showError(err);
    else showError("Unexpected error in task action.");
  } finally {
    setLoading(false);
  }
}

// reset
function resetForm() {
  taskForm.reset();
  taskIdInput.value = "";
  clearMessages();
}

// Event listeners
taskForm.addEventListener("submit", handleSubmit);
taskListEl.addEventListener("click", handleListClick);
filterPrioritySelect.addEventListener("change", () => loadTasks(false));
filterStatusSelect.addEventListener("change", () => loadTasks(false));
reloadButton.addEventListener("click", () => loadTasks(true));
resetFormButton.addEventListener("click", resetForm);

if (confirmCancelBtn && confirmOkBtn && confirmModal) {
  confirmCancelBtn.addEventListener("click", () => {
    confirmModal.classList.remove("is-open");
    pendingDeleteId = null;
  });

  confirmOkBtn.addEventListener("click", async () => {
    if (!pendingDeleteId) return;

    clearMessages();
    setLoading(true);
    confirmModal.classList.remove("is-open");

    try {
      await withRetry(() => manager.remove(pendingDeleteId), "delete task");
      showNotification("Task deleted.");
      await loadTasks(false);
    } catch (err) {
      if (err instanceof TaskError) showError(err);
      else showError("Unexpected error in delete action.");
    } finally {
      setLoading(false);
      pendingDeleteId = null;
    }
  });
}

// გვერდის ჩატვირთვისას ყველა ტასკის წამოღება
loadTasks(true);
