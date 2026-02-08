// 1
function calculate(a, b, callback) {
  return callback(a, b);
}

function sum(a, b) {
  return a + b;
}

console.log(calculate(8, 9, sum)); 


// 2
function process_numbers(numbers, filter_func, transform_func) {
  let filtered = numbers.filter(filter_func);
  let transformed = filtered.map(transform_func);
  return transformed;
}


function filter_func(n) {
  return n % 2 === 0;   
}

function transform_func(n) {
  return n * n;   
}

let nums = [12, 15, 18, 22, 29, 6];
let result = process_numbers(nums, filter_func, transform_func);
console.log(result); 

