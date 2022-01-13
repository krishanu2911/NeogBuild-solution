//Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.
const minout3 = (num1, num2, num3) => {
    if(num1<num2 && num1<num3)  return num1
    else if(num2<num1 && num2< num3) return num2
    else return num3
}
console.log(minout3(10,20,3));