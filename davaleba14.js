// 1
let firstname = prompt("ჩაწერე შენი სახელი: ");
console.log("გამარჯობა" + " " + firstname);

// 2
let num=prompt("ჩაწერეთ რიცხვი: ")
console.log(num * 2)

// 3
let num2=Number(prompt("შეიყვანეთ რიცხვი:"))
if (num2 <= 100){
    console.log("რიცხვი არ არის მეტი 100-ზე")
}
else if (num2>100){
    console.log("რიცხვი მეტია 100-ზე")
}

// 4
let ricxvi1=Number(prompt("შეიყვანეთ რიცხვი:"))
let ricxvi2=Number(prompt("შეიყვანეთ რიცხვი:"))
let ricxvi3=Number(prompt("შეიყვანეთ რიცხვი:"))
console.log(ricxvi1+ricxvi2+ricxvi3)
