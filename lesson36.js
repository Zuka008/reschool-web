
// class Transport{
//     constructor(KM_quantity){
//         this.KM_quantity=KM_quantity
//     }
// }

// class Motorcycle extends Transport{
//     constructor(brand, model, year){
//         super();
//         this.brand=brand;
//         this.model=model;
//         this.year=year;
//     }
//     getYearsOld(){
//         return 2025-this.year
//     }
// }

// const moto1 = new Motorcycle("suzuki", "kawasaki", 2015);
// console.log(moto1.getYearsOld);




// 1
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    describe() {
        return (`${this.name} is ${this.age}years old`)
    }
}

class Bird extends Animal {
    constructor(name, age, canFly){
        super(name, age);
        this.canFly = canFly;
    }
    fly() {
    if (this.canFly) {
        return `${this.name} is flying!`;
    } else {
        return `${this.name} cannot fly.`;
    }
}
}
 const chiti = new Bird("arwivi", 3, true)
 console.log(chiti.fly())

//  2
class Person{
    constructor(saxeli){
        this.saxeli = saxeli
    }
    Breath(){
      return `${this.saxeli} can breath`
    }
}

class Student extends Person{
    constructor(saxeli, SchoolName){
        super(saxeli);
        this.SchoolName = SchoolName;
    }
    Study(){
    return `${this.saxeli} studies well in ${this.SchoolName}`
    }
}

class HighSchoolStudent extends Student{
    constructor(saxeli, SchoolName, asaki){
        super(saxeli, SchoolName);
        this.asaki = asaki
    }
    BirthDate(){
       return `${this.saxeli}, from ${this.SchoolName}, was born on ${2025-this.asaki}`

    }
}