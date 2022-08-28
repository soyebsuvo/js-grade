// var num = 8;

// if(num % 2 == 0)
// console.log("even");

// else
// console.log("odd");

// var num1 = -5;

// if(num1>0)
// console.log("positive");

// else if(num1<0)
// console.log("negetive");

// else
// console.log("zero");

var num2 = prompt("enter your mark : ");

if(num2 >= 80 && num2 <= 100)
document.write("Your grade = A+ = 5.00");

else if(num2 >= 70 && num2 <= 79)
document.write("Your grade = A = 4.00");

else if(num2 >= 60 && num2 <= 69)
document.write("Your grade = A- = 3.50");

else if(num2 >= 50 && num2 < 59)
document.write("Your grade = B = 3.00");

else if(num2 >= 40 && num2 < 49)
document.write("Your grade = C = 2.00");

else if(num2 >= 33 && num2 < 39)
document.write("Your grade = D = 1.00");

else if(num2 >= 101)
document.write("You entered Invalid mark");

// else if(num2 )

else
document.write("Your grade = F = 0")