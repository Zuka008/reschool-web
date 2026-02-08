// let student = {
//     name : "Zuka",
//     age:16,
//     school: 41,
//     hobbies:['playing', 'reading']
// }
// student.age=99
// console.log(student.age)
// delete student.hobbies
// console.log(student)





// const studentList=[
//     {
//       B1:[
//         {
//             name : "Zuka",
//             age:16,
//             school: 41,
//             hobbies:['playing', 'reading']
//         }
//       ],
//       B2:[
//         {
//             name : "Zuka",
//             age:16,
//             school: 41,
//             hobbies:['playing', 'reading']
//         }
//       ]
//     }
// ]
// // console.log(student.firstName)
// console.log(studentList[0].B1[0].age)



// let teacher = new Object()
// teacher.name = "Tiko";
// teacher.age = "22";
// console.log(teacher);

// // let teacher2 = {}

// let calculator = {
//     num1: 10,
//     mum2: 20,
//     add:function(){
//         return this.num1 + this.num2
//     },
// };

// let school = {
//     name: "progress",
//     address:{
//         city: "kutaisi",
//         street: "Agmashenebeli N20",
//     }
// }

// let schoolJSON = JSON.stringify(school)
// console.log(school)

let socialProfile={
    userName : "giorgib",
    fullName : "Giorgi Beridze",
    age : 16,
    location: "tbilisi, georgia",
    followers: 234,
    following: 156,
    posts:[
        {id: 1, content: "Learning javascript today! coding", likes: 23},
        {id: 2, content: "had fun at the science fair", likes:45}
    ],
   addlikes:function(){
   return this.socialProfile.posts[0].likes + 3
   }
}

// console.log(socialProfile.addlikes[])


