const fruits = ["vashli", "msxali", "banani", "fortoxali"];
const removed = fruits.splice(1,2);
console.log(removed);
console.log(fruits);

// pirveli ari elementis nomeri, meore ramdens shlis, mesame elements amatebs
fruits.splice(1,0, "atami") ;
console.log(fruits);


const fruits_2 = ["vashli", "msxali", "banani", "fortoxali", "kivi"];
const someFruits = fruits_2.slice(1,4);
console.log(fruits_2);


const fruits_3=["vashli", "msxali"];
const moreFruits=["banani", "fortoxali"];
const allFruits = fruits.concat(moreFruits);
console.log(allFruits);

const fruitString = allFruits.join(", ");
console.log(fruitString);

const fruits_4=["vashli", "msxali", "banani", "fortoxali", "kivi", "msxali"];
console.log(fruits.indexOf("msxali"));
console.log(fruits.indexOf("manqana"));
console.log(fruits.lastIndexOf("msxali"));
console.log(fruits.includes("msxali"));

// find poulobs pirvel elements romelic akmayofilebs pirobas
const numbers=[1,2,3,4,5,6]
console.log(numbers.find(num=>num>3));
// filter


// qmnis axal masivs, gardaqmnis titoeul elements
const ricxvi=[1,2,3,4,5,6];
const doubled = ricxvi.map(num=>num*2);
console.log(doubled)


const cars=["toyota", "mitsubishi", "ferrari"];
fruits.sort();
console.log(cars)
// anbanis mixedvit



const fruits_5 = ["vashli", "msxali", "banani", "fortoxali"];
for(let i = 0; i<fruits.length; i++){
console.log(`ინდექსი ${i}: ${fruits_5[i]}`)
}

const ricxvebi = [1,2,3,4,5,6,7,8,9,10]
const evenNumbers = ricxvebi.filter((num)=>{
    return num%2===0;
});