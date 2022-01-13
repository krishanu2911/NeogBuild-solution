//Write program to take a month as an input from the user and find out whether the month has 31 days or not.
const monthof31day = [1,3,5,7,8,10,12];
const check31month = (num) => {
    let monthflag = false
    for(let i = 0; i<monthof31day.length ; i++){
        if(num === monthof31day[i]) monthflag = true ;
    }

    return monthflag
}
console.log(check31month(12));