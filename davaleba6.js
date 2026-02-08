//savarjisho 1
let numbers = [23, 45 ,12, 67, 89, 34, 9];
//1
let max = 23;
for (let i=0; i<numbers.length; i++){
    if( numbers[i]>max){
        max=numbers[i]
    }
}
console.log(max);
//2
let min = 23;
for (let i=numbers.length-1; i>=0; i--){
    if( numbers[i]<min){
        min=numbers[i]
    }
}
console.log(min);

//3
let sum = 0;
for(let i=0; i<numbers.length; i++){
    sum=sum+numbers[i]
}
console.log(sum);

//4
let average = sum/(numbers.length-1);
console.log(average);

//5
let zrdadobit = numbers.sort((a,b) => a-b);
console.log(zrdadobit);
//6
let klebadobit = numbers.sort((a,b) => b-a);
console.log(klebadobit);

//7
numbers_2 = numbers.filter(num=>num>20);
console.log(numbers_2);

///8
let doubled = numbers.map(num=>num*2);
console.log(doubled);

//savarjisho 2
let fruits = ["ვაშლი", "მსხალი", "ბანანი"];
let vegetables = ["კიტრი", "პომიდორი", "სტაფილო"];
//1
let food = fruits.concat(vegetables);
console.log(food);
//2
vegetables.splice(vegetables.length/2, 0, "წიწაკა" );
console.log(vegetables);
//3
xili = fruits.reverse();
console.log(xili);
//4
products = xili.concat(vegetables);
console.log(products.join(", "));

//5
let nomeri = xili.indexOf("მსხალი");
xili.splice(nomeri, 1, "ატამი");
console.log(xili);
