// 1
const regex_1 = /\d+/g;
console.log("I have 2 cats, 14 apples and 300 candies".match(regex_1));


// 2
const regex_2 = /^[A-Za-z]+$/;
console.log(regex_2.test("Hello"));    
console.log(regex_2.test("Hello123")); 

// 3
const regex = /\s+/g;
console.log("This   is    a   test".replace(regex, " "));
