// *
// * *
// * * *
// * * * *
// * * * * *
let patternstr = "";
const pattern = (n) => {
    for(let i = 0 ; i<n ; i++){
        for(let j = 0; j<i; j++){
            patternstr += "*"
        }
        patternstr += "\n"
    }
}

pattern(5);
console.log(patternstr);