// 1
function filterNumbers(numbers, callback) {
    let result = [];
    for (let num of numbers) {
        if (callback(num)) {
            result.push(num);
        }
    }
    return result;
}


function isEven(number) {
    return number % 2 === 0;
}

function isOdd(number) {
    return number % 2 !== 0;
}


let nums = [10, 934, 462, 911, 777, 12, 89];


console.log(filterNumbers(nums, isEven));
console.log(filterNumbers(nums, isOdd));

// 2

function applyToArray(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

let nums2 = [8, 1, 54, 13, 18];

function double(num) {
  return num * 2;
}

function square(num) {
  return num * num;
}

console.log(applyToArray(nums2, double));
console.log(applyToArray(nums2, square));

// 3
function filterNames(names, callback) {
  let result = [];
  for (let i = 0; i < names.length; i++) {
    if (callback(names[i])) {
      result.push(names[i]);
    }
  }
  return result;
}

function startsWithA(name) {
  return name[0] === "A";
}

function longerThanFour(name) {
  return name.length > 4;
}

let names = ["Luka", "Zuka", "Natia", "Anastasia"];


console.log(filterNames(names, startsWithA));
console.log(filterNames(names, longerThanFour));
