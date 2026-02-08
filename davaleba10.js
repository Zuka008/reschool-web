// 2

const images = ["th.jpg", "th (4).jpg", "th (7).jpg"];
let index = 0;

const imgElement = document.getElementById("carouselImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function showImage(i) {
    index = (i + images.length) % images.length;
    imgElement.style.opacity = 0;
    setTimeout(() => {
        imgElement.src = images[index];
        imgElement.style.opacity = 1;
    }, 200);
}

prevBtn.addEventListener("click", () => showImage(index - 1));
nextBtn.addEventListener("click", () => showImage(index + 1));


//   3

let taskList = document.getElementById("taskList");
let mark = document.getElementById("mark");
let add = document.getElementById("add");
let remove = document.getElementById("remove");
let subjectInput = document.getElementById("subjectInput");


function createSubjectItem(subjectName) {
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.textContent = subjectName;


    let markBtn = document.createElement("button");
    markBtn.textContent = "Mark";
    markBtn.className = "small-btn";
    markBtn.addEventListener("click", function () {
        li.classList.toggle("done");
    });


    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "small-btn";
    removeBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(markBtn);
    li.appendChild(removeBtn);

    return li;
}


let originalSubjects = Array.from(taskList.children);
taskList.innerHTML = "";
originalSubjects.forEach(item => {
    let newItem = createSubjectItem(item.textContent.trim());
    taskList.appendChild(newItem);
});


add.addEventListener("click", function () {
    let value = subjectInput.value.trim();
    if (value !== "") {
        let newItem = createSubjectItem(value);
        taskList.appendChild(newItem);
        subjectInput.value = "";
    } else {
        alert("Please enter a subject.");
    }
});


remove.addEventListener("click", function () {
    if (taskList.children.length > 0) {
        taskList.removeChild(taskList.lastElementChild);
    }
});


mark.addEventListener("click", function () {
    let allItems = taskList.querySelectorAll("li");
    allItems.forEach(item => item.classList.add("done"));
});