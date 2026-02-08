

// შექმენი ობიექტი სახელად person, რომელსაც ექნება შემდეგი თვისებები:
// name
// age
// და მეთოდი greet(), რომელიც დაბეჭდავს მისალმებას წინა თვისებების მიხედვით: სახელი და ასაკი.

// let person = {
//     name: "pablo",
//     age: 26,
//     greet: function () {
//         console.log(`hi, i'm ${this.name} and i am ${this.age}.`);
//     }
// }

// person.greet()


let animal = {
    species: "mammal",
    breathe: function() {
        return "I can breathe";
    },
    
};

let dog = {
    breed: "Golden Retriever"
};

Animal 

// dog-ს prototype-ად ვაყენებთ animal-ს
Object.setPrototypeOf(dog, animal);

console.log(dog.breed); // "Golden Retriever" (თვით ობიექტიდან)
console.log(dog.species); // "mammal" (prototype-იდან)
console.log(dog.breathe()); // "I can breathe" (prototype-იდან)
 
// Constructor Functions და Prototypes
// Constructor function
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
    this.speed = 0;
}

// მეთოდების დამატება prototype-ში
Car.prototype.accelerate = function(amount) {
    this.speed += amount;
    return `${this.brand} is now going ${this.speed} km/h`;
};

Car.prototype.brake = function(amount) {
    this.speed = Math.max(0, this.speed - amount);
    return `${this.brand} slowed down to ${this.speed} km/h`;
};

// ახალი მანქანების შექმნა
let toyota = new Car("Toyota", "Corolla");
let bmw = new Car("BMW", "X5");

console.log(toyota.accelerate(50)); // "Toyota is now going 50 km/h"
console.log(bmw.accelerate(80)); // "BMW is now going 80 km/h"











// რა არის Inheritance?
// Inheritance (მემკვიდრეობა) არის OOP-ის (Object-Oriented Programming) ძირითადი პრინციპი, რომელიც საშუალებას გვაძლევს ერთმა კლასმა "მემკვიდრეობით" მიიღოს სხვა კლასის თვისებები და მეთოდები.
// JavaScript-ში Prototypal Inheritance
// JavaScript იყენებს prototypal inheritance-ს, რაც განსხვავებულია კლასზე დაფუძნებული inheritance-სგან:
// Parent "class" (Constructor function)
function Animal(name) {
    this.name = name;
    this.alive = true;
}

Animal.prototype.eat = function(food) {
    return `${this.name} is eating ${food}`;
};

Animal.prototype.sleep = function() {
    return `${this.name} is sleeping`;
};

// Child "class"
function Dog(name, breed) {
    // Parent constructor-ის გამოძახება
    Animal.call(this, name);
    this.breed = breed;
}

// Inheritance-ის დამყარება
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Dog-სპეციფიკური მეთოდები
Dog.prototype.bark = function() {
    return `${this.name} says Woof!`;
};

Dog.prototype.wagTail = function() {
    return `${this.name} is wagging tail`;
};

// გამოყენება
let myDog = new Dog("Rex", "German Shepherd");

console.log(myDog.name); // "Rex" (Animal-იდან)
console.log(myDog.breed); // "German Shepherd" (Dog-იდან)
console.log(myDog.eat("kibble")); // "Rex is eating kibble" (Animal-იდან)
console.log(myDog.bark()); // "Rex says Woof!" (Dog-იდან)
 









// Base User
function User(username, email) {
    this.username = username;
   this.email = email;
    this.followers = [];
    this.following = [];
    this.posts = [];
}

User.prototype.follow = function(user) {
    if (!this.following.includes(user)) {
        this.following.push(user);
        user.followers.push(this);
        return `${this.username} is now following ${user.username}`;
    }
    return `Already following ${user.username}`;
};

User.prototype.post = function(content) {
    let post = {
        content: content,
        timestamp: new Date(),
        likes: 0,
        author: this.username
    };
    this.posts.push(post);
    return `Post created: "${content}"`;
};

// Student extends User
function Student(username, email, school, grade) {
    User.call(this, username, email);
    this.school = school;
    this.grade = grade;
    this.subjects = [];
}

Student.prototype = Object.create(User.prototype);
Student.prototype.constructor = Student;

Student.prototype.addSubject = function(subject) {
    this.subjects.push(subject);
    return `Added ${subject} to subjects`;
};

Student.prototype.study = function(subject) {
    if (this.subjects.includes(subject)) {
        return `${this.username} is studying ${subject}`;
    }
    return `${this.username} is not enrolled in ${subject}`;
};

// Teacher extends User
function Teacher(username, email, school, department) {
    User.call(this, username, email);
    this.school = school;
    this.department = department;
    this.students = [];
}

Teacher.prototype = Object.create(User.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.addStudent = function(student) {
    this.students.push(student);
    return `${student.username} added to class`;
};

Teacher.prototype.gradeStudent = function(student, subject, grade) {
    return `${student.username} received grade ${grade} in ${subject}`;
};

// გამოყენება
let student1 = new Student("giorgi_14", "giorgi@email.com", "School #1", 8);
let teacher1 = new Teacher("ms_nina", "nina@school.com", "School #1", "Mathematics");

console.log(student1.addSubject("Math")); // "Added Math to subjects"
console.log(student1.post("Math homework is hard!")); // Post created
console.log(teacher1.follow(student1)); // "ms_nina is now following giorgi_14"
console.log(teacher1.gradeStudent(student1, "Math", 95)); // "giorgi_14 received grade 95 in Math"
 

