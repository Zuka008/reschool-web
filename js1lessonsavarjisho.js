
// savarjisho 1
// 1
const students = ["ვახტანგი", "ლიზი", "ანა", "ზუკა", "ექვთიმე"];

console.log(students[students.length-1])

console.log(students[0]);

// 2
students.push("გელა");

// 3
students.unshift("მათე")

// 4
console.log(students.length)

// 5
console.log(students.includes("ანა"));

// 6
console.log(students.indexOf("ანა"));

// 7
students.pop()
// console.log()

// 8
students.shift()

// 9
console.log(students)



// savarjisho 2
// 1
const numbers1 = [1,2,30,4,18];
const numbers2 = [6,40,8,15,10];
const numbers3 = numbers1.concat(numbers2)
// 2
const numbers = numbers3.map(num=>num*10);
// 3
numbers.filter(num=>num>200)


// 4
let shua = numbers.length/2
let results1 = numbers.slice(0,shua)
let result2 = numbers.slice(shua, numbers.length)



// bonusi
let max = numbers[0];
for(let i = 0; i<numbers.length; i++){
   if(numbers[i]>=max){
    max=numbers[i]
   }
}
console.log(max)

let min = numbers[0];
for(let i = numbers.length; i>=0;i--){
   if(numbers[i]<min){
    min=numbers[i]
   }
}
console.log(min)