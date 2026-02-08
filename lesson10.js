let adddElementBtn = document.getElementById("add-element-id");
let divContainer = document.getElementById("elements-container");

function addElement(){
    divContainer.className = "elements-container-style";
    const newElement = document.createElement("h1");
    newElement.textContent="new element";
    divContainer.appendChild(newElement);

}

// adddElementBtn.addEventListener("click", addElement);
adddElementBtn.addEventListener("dblclick", addElement);


