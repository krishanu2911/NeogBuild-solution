//Write a Program to take a number input from user and find if the number is Prime or not.

const primenum = (n) => {
    let primeflag = true;
    for (let i=2; i<n ; i++){
        if(n%i === 0) primeflag = false 
    }

    return primeflag;
}
console.log(primenum(6));