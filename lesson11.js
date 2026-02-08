// const studentList = ["taso", "gio", "zuka", "saba"];
// studentList[0] = "Taso2";
// console.log(studentList);

// const createPerson = (fullname, city) => ({name: fullname, city: city});
// console.log(createPerson("zukamuradiani", "kutaisi"));


// const numbers = [1,2,3,4];
// const doubled = numbers.map(num => num*2);
// console.log(doubled);

const student = {
    name: "John Doe",
    age:20,
    major: "computer Science",
};
let{ name, age, major} = student;
console.log(name);
console.log(age);

// const fruit = ["apple", "banana", "cherry"];
// const [f1, f2, f3] = fruit;
// console.log(f1);

const fruit = ["apple", "banana", "cherry"];
const [...xili] = fruit;
console.log(xili);

// for(key in object){

// }
// for of masivebtan, for in obieqtebtan!!!

const xilebi = ["banana", "orange", "apple", "mango"];
const f = xilebi.entries();

for(x of xilebi){
    console.log(x)
}

