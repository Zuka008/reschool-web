
// floating chat bubbles (pirvel seqciashi)
const bubbles = document.querySelectorAll(".bubble");

bubbles.forEach((bubble) => {
  const duration = 3 + Math.random() * 2;
  const delay = Math.random() * 2;
  bubble.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
});


// sticky navbar
// Adds/removes scroll class(qvevit punqciistvis)
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) navbar.classList.add("scrolled");
  else navbar.classList.remove("scrolled");
});


// scrollvisas axali seqciis gamochenis punqcia
function revealOnScroll(selector) {
  const section = document.querySelector(selector);
  const position = section.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight / 1.2;
  if (position < triggerPoint) section.classList.add("visible");
}

window.addEventListener("scroll", () => {
  revealOnScroll(".how-it-works");
  revealOnScroll(".quote-section");
});


// reviews(what students are saying seqciashi)
const reviews = [
  {
    text: "It was a wonderful journey. It showed me and my colleagues how fascinating the drinking culture can be. I liked the format of this training. The developers did their best, thank you!",
    author: "Ann, 24"
  },
  {
    text: "This program completely changed how our team collaborates. It’s fun, engaging, and incredibly effective for boosting morale!",
    author: "Mark, 28"
  },
  {
    text: "Loved every part of it! Especially the team activities — they really brought us closer together.",
    author: "Julia, 31"
  }
];

let currentReview = 0;


const testimonialText = document.querySelector(".testimonial-text");
const authorInfo = document.querySelector(".author-info");
const nextBtn = document.querySelector(".slider-btn.active");
const prevBtn = document.querySelector(".slider-controls .slider-btn:first-child");

// Logs bubbling example
document.querySelector(".slider-controls").addEventListener("click", (event) => {
  if (event.target.classList.contains("slider-btn")) {
    console.log("🟠 Bubbling: button clicked inside slider-controls");
  }
});

// next da previous buttonebi
nextBtn.addEventListener("click", () => {
  currentReview = (currentReview + 1) % reviews.length;
  updateReview();
});

prevBtn.addEventListener("click", () => {
  currentReview = (currentReview - 1 + reviews.length) % reviews.length;
  updateReview();
});

// cvlis texts buttonis dacherisas
function updateReview() {
  testimonialText.textContent = reviews[currentReview].text;
  authorInfo.innerHTML = `<strong>${reviews[currentReview].author}</strong>`;
}

// event-listener for capturing
document.addEventListener(
  "click",
  () => console.log("🔵 Capturing phase: Document level"),
  true
);

// comment listis sheqmna
const commentList = document.querySelector(".comment-list");

// deleteze dacherisas shlis da console logshi achvenebs bubbling phases
commentList.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    const item = event.target.closest(".comment-item");
    console.log("🟠 Bubbling phase: Delete button clicked inside list");
    item.remove();
  }
});

// komentarebis damateba
document.getElementById("addCommentBtn").addEventListener("click", () => {
  const input = document.getElementById("commentText");
  const text = input.value.trim();
  if (text) {
    const li = document.createElement("li");
    li.classList.add("comment-item");
    li.innerHTML = `
      ${text}
      <button class="delete-btn">Delete</button>
    `;
    commentList.appendChild(li);
    input.value = "";
  }
});



// dom elementebi(capturing da bubbling phasebis dasawerad)
const doc = document;
const body = document.body;
const section = document.querySelector(".testimonial-section");
const controls = document.querySelector(".slider-controls");
const button = document.querySelector(".slider-btn.active");


//bubbling da capture phases console logshi fers ucvlis
function log(msg, color = "black") {
  console.log(`%c${msg}`, `color:${color}; font-weight:bold;`);
}

// Capture phase logs (top → bottom)
doc.addEventListener("click", () => log("Capturing: document", "gray"), true);
body.addEventListener("click", () => log("Capturing: body", "gray"), true);
section.addEventListener("click", () => log("Capturing: testimonial-section", "blue"), true);
controls.addEventListener("click", () => log("Capturing: slider-controls", "blue"), true);
button.addEventListener("click", () => log("Capturing: button (target phase)", "purple"), true);

// Bubble phase logs (bottom → top)
button.addEventListener("click", () => log("Bubbling: button (target phase)", "purple"));
controls.addEventListener("click", () => log("Bubbling: slider-controls", "orange"));
section.addEventListener("click", () => log("Bubbling: testimonial-section", "orange"));
body.addEventListener("click", () => log("Bubbling: body", "green"));
doc.addEventListener("click", () => log("Bubbling: document", "green"));
