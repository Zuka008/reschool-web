// 1
let div1 = document.getElementById("div_1");
div1.style.backgroundColor = "blue";
function changeBackground(){
    if( div1.style.backgroundColor == "blue"){
     div1.style.backgroundColor = "green"
    }
    else{
     div1.style.backgroundColor = "blue"
    }
 }
 

 div1.addEventListener("click", changeBackground);
 
// 2
 function changeImage() {
    let img = document.getElementById("img1");
    if (img.src.endsWith("th.jpg")) {
      img.src = "th ().jpg";
    } else {
      img.src = "th.jpg";
    }
  }
  
  let button = document.getElementById("btn1");
  button.addEventListener("click", changeImage);

//   3

let taskList = document.getElementById("taskList");
let mark = document.getElementById("mark");
let add = document.getElementById("add");
let remove = document.getElementById("remove");


mark.addEventListener("click", function() {

    let tasks = taskList.getElementsByTagName("li");
    for (let task of tasks) {
        task.classList.add("done");  
    }
});


add.addEventListener("click", function() {
    let newSubject = document.createElement("li");
    newSubject.textContent = "Chemistry"; 
    taskList.appendChild(newSubject); 
});

remove.addEventListener("click", function() {

    if (taskList.children.length > 0) {
        taskList.removeChild(taskList.lastElementChild);
    }
});