//Write a program to take a day as an input and determine whether it is a weekday or weekend. Example: Tuesday is weekday.
const weekend = [ "Saturday" , "Sunday"]
const weekdayorweekend = (day) => {
    for(let i = 0; i<weekend.length; i++){
        if( day === weekend[i]){
            return `${day} is weekend`
        }

    }

    return `${day} is weekday`
}
console.log(weekdayorweekend("Tuesday"));