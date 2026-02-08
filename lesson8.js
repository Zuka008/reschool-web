const newFunct = function (){
    console.log("newFunc");
}
newFunct();

const newFunc2 = (name) => {
    console.log("newFunc2", name);
}

newFunc2("Tiko");

function sum(...numbers){
    let total =0;
    for(let i = 0; i< numbers.length; i++){
        total+=numbers[i];
    }
    return total;
}
console.log(sum(1,2,3,4));


function greet(saxeli){
    console.log("gamarjoba" + saxeli);
}
let shedegi = greet(nino);
console.log(shedegi);



function checkAge(age){
    if(age>=18){
        return true;
    }
    return false;

    console.log("es ar daibechdeba");
}

console.log(add(10,10));
function add(a,b){    return a+b;
}


function factorial(n){
    if(n<=1){
        return 1;
    }
    return n * factorial(n-1)
}
console.log(factorial(5))


// let library = {
//     books:[{
//         title: "the great gatsby",
//         author: "me",
//         year: 1925,
//         read: false,
//     },
//     ],
//     addBook: function(title, author, year){
//         this.books.unshift({
//          title: title,
//          author: author,
//          year: year,
//          read: false
//         })    }
// }