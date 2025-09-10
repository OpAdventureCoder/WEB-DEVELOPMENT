alert("Operator In JS");
// 01 Arithmetic Operators
let a = 5;
let b = 2;

console.log("a+b =", a + b);
console.log("a-b =", a - b);
console.log("a*b =", a * b);
console.log("a/b =", a / b);
// Note - In confirm "A+B" is expresion and "+" is operator.And "A,B" is operands.

// In arithmetic operator also two types operator.
//  modulus - It is difien by "%". It is show remiander.
console.log("a % b =", a % b);

// Exponentiation Operator - It is Difine by "**". It is shown the power.
console.log("a**b =", a ** b);

// 02 Unary Operator
// Increment - It is difine by "++".There are also two types.

// a. Preincrement - means before print increment then print. like - ++a.
console.log("here a = 5 after increment. ++a =", ++a);

// b. Postincrement - Just opposite of preIncrement.before print then increment. like - a++
console.log("here a = 5 after post increment a++=", a++);
// console.log(a);

// Decrement just opposite of Increment.

// 02 Assignment Operators (=, +=, -=, *= , %= , **=)
let num1 = 4;
let num2 = 5;
let num3 = 6;
let num4 = 7;

num1 += 4; //IT mean (num1 = num1 + 4)
num2 -= 5; //IT mean (num2 = num2 - 5)
num3 *= 6; //IT mean (num3 = num3 * 6)
num4 /= 7; //IT mean (num4 = num4 / 7)

console.log("num1 += is =", num1);
console.log("num2 -= is =", num2);
console.log("num3 *= is =", num3);
console.log("num4 /= is =", num4);

// Comparison Operators (Equal to == ,Not equal to != ,Equal to & type === ,Not equal to & type !==,>, >=, <, <= )
// It is always show in boolean type.(True/False)

let number1 = 5;
let number2 = 6;

console.log(number1 == number2); //It is show false
console.log(number1 != number2); //Itis show true. because it is not (!) equal.

let number3 = "5";
let number4 = "5";
console.log(number3 === number4); //It is true because same data Type.
console.log(number3 !== number4); //It is false.

// Logical Operators ( AND && , OR || , NOT ! )
// "&&" and Operator,it give output  ture when the both values are true.
// "||" or Operator,it give output ture when the one values are true.
// "!" not Operator,it it is convert the values in opposite values .
