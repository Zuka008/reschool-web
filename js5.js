//1
scores = [85, 92, 78, 90, 88];
sum=0;
for (let i=0; i<scores.length; i++){
    sum=sum+scores[i]
}
console.log(sum)


max = 85
for (let i=0; i<scores.length; i++){
    if( scores[i]>max){
        max=scores[i]
    }
}
console.log(max)

let sum_1 = 0
for (let i=0; i<scores.length; i++){
    sum_1=sum_1+scores[i]
}
console.log(sum_1/scores.length)

//2
// martivi ricxvebis povna functionit
function isPrime() {
    for (let n = 2; n <= 50; n++) {
        let j = 2;
        while (j <= Math.sqrt(n) && n % j !== 0) {
            j++;
        }

        if (j > Math.sqrt(n)) {
            console.log(n);
        }
    }
}
isPrime()

//kenti ricxvebis povna for ciklit
    for(let k=1;k<=50;k++){
        if(k%2==1){
            console.log(k)
        }
    }

// 3
function repeatString(text, repeat){
    let teqsti="";
    let gameoreba=0;
    while(gameoreba<repeat){
        teqsti=teqsti+text;
        gameoreba++
    }
    return teqsti
}
console.log(repeatString("lavashi", 8));
console.log(repeatString("xaxvi", 3));
console.log(repeatString("traqtori", 5));