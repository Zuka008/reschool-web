let first_h1 = document.getElementById("first_h1");
first_h1.innerHTML = "hello world!";

let get_el_tagnames = document.getElementsByTagName("h1");
get_el_tagnames[1].style.backgroundColor = "red";
function changeBackground(){
   if( get_el_tagnames[1].style.backgroundColor == "red"){
    get_el_tagnames[1].style.backgroundColor = "green"
   }
   else{
    get_el_tagnames[1].style.backgroundColor = "red"
   }
}

function changeBackgroundBtn(){
    document.getElementById("btn-click").style.backgroundColor  = "grey"
}
document.getElementById("btn-click").addEventListener("click", changeBackgroundBtn);



document.getElementById("btn-click").addEventListener("dblclick", changeBackground);
// click, dblclick, mouseover, mousedown da kideabevri