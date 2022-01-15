// Given a and b, your function should return the value of ab
// Example:
// Input: power(2,3) ––> Output: 8
const power = (a,b) => {
    let ans = 1;
    for(let i=0; i<b; i++){
        // console.log("h")
        ans =ans * a;       
    }
    return ans
}
console.log(power(2,3))