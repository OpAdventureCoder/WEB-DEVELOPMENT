// iteration method in array
// 01 foreach() : call a function for each array element.that means indivial.
// let arr = ["UMESH", "KANNAT", "BITTU"];

// arr.forEach(function (el) {
//   console.log(el);
// });

//through the function
// let print = function (el) {
//   console.log(el);
// };

// console.log(arr.forEach(print));

// 02. map() : it's similer to foreach but it's return the value for each function and create a new array from old.
let num = [2, 4, 6, 12];

// let print = function (el) {
//   return el * 2;
// };
// console.log(num.map(print));

// 03. filter() : that create a new array then condition is pass and return the vlaue of each function.
// let print = function (el) {
//   return el % 3 == 0;
// };
// console.log(num.filter(print));

// 04. every() :if the test case is pass that is return the ture when the all function value is true otherwise return false
// let print = function (el) {
//   return el % 2 == 0;
// };
// console.log(num.every(print)); // output = true

// let num1 = [2, 4, 6, 8, 10];
// let print = function (el) {
//   return el % 2 == 0;
// };
// console.log(num1.every(print)); // output = True

// 05. some() : that function return true or false. It's based on OR GATE.

// 06. reduce() : it's return the single value.in which we have two parameter first is accoumelator and result

//ex of sum result
//(0,1) => 1
//(1,2) => 3
//(3,3) => 6
//(6,4) => 10 output

//
// let num1 = [1, 2, 4, 5];
// let print = function (result, el) {
//   console.log(result);
//   return result + el;
// };
// console.log(num1.reduce(print));

// how is it work.
// acc + el = result  //result ki value acc me aa jati hai
//  0  + 1  = 1
// acc + el = result
//  1  +  2 =  3
// acc + el = result
//  3  +  3 =  6
// acc + el = result
//  6  +  4 = 10       // That is final result

// 07. spread() : It's the expand an array in the indivial array.In which we are use ... operator.

// let num2 = [1, 2, 4, 8, 6, 5];
// let num1 = [85, 778, 65];
// console.log(...num1, ...num2);
// console.log(Math.max(...num2));

// console.log(..."UMESH");

//spread with array and string
// let str = [..."KANNAT"]; //in which we can store the element in single character
// console.log(str);

// 08. rest() : that is collect element in single Array.
// function sum(...arg) {
//   return arg.reduce((res, el) => res + el);
// }
// console.log(sum(4, 8, 6));

// deconstruct array : That means storing the vlaue in multiple varible
// let arr4 = ["UMESH", "KANNAT", "HERO", "PRAKASH"];
// when we want access the array then use it.
// arr4[0];
// arr4[1];

// is se bhi essay way hai ki
// let [Winner, secondwinner, runerup] = arr4;
// console.log(Winner); // given first index

// using the rest concept
// let [Winner, ...other] = arr4; // in other we are use rest concept
// console.log(other);

//DESTRUCTURE OBJECTS
// let student = {
//   user: "UMESH",
//   age: 35,
// };

// let { user: name, age: age } = student;
// console.log(name);
