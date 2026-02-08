//ქმნის vehicle ობიექტს (ბრენდის და წლის ინფორმაციით)
function Vehicle(brand, year) {
    this.brand = brand;
    this.year = year;
}

// პროტოტიპით ყველა vehichle ობიექტს შეუძლია ამ ფუნქციის გამოყნება
Vehicle.prototype.start = function () {
    return `${this.brand} is starting`;
};

// car მემკვიდრეობით იღებს vehicles(brand, year) და ასევე აქვს doors
function Car(brand, year, doors) {
    Vehicle.call(this, brand, year);
    this.doors = doors;
}

// მემკვიდრეობის დამყარება
Car.prototype = Object.create(Vehicle.prototype);

Car.prototype.constructor = Car;


// car-ის honk ფუნქციის შექმნა
Car.prototype.honk = function () {
    return `${this.brand} goes beep beep!`;
};

// ტესტირება
let myCar = new Car("Honda", 2020, 4);
console.log(myCar.start()); // "Honda is starting"
console.log(myCar.honk());  // "Honda goes beep beep!"
