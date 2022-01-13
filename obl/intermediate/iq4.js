//Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....
let series = [0,1];
const fibonacci = (n)=>{
    
    let num1 = 0;
    let num2 = 1;
    let nextnum
    for(let i=0; i<n ; i++){
        nextnum = num1 + num2;
        series.push(nextnum);
        num1 = num2;
        num2 = nextnum;
    }
}

fibonacci(10);
console.log(series);