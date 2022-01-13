//Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.

const  maxoutof3 = (num1,num2,num3) => {
    if(num1 >num2 && num1 >num3) return num1
    else if(num2> num1 && num2 > num3) return num2
    else return num3
}
console.log(maxoutof3(-19,-28,-3));