// function a(parameter) {
//   console.log(parameter);
// }

// a(argument); //argument is the real value that is passed to function

//default parameter
// const a = function (a, b = 2) {
//   return a + b;
// }; // in this example b is default parameter

// console.log(a(2));

//function rest parameter
function name(...params) {
  return params[0] + params[1] + params[2];
}
console.log(name(1, 5, 8));
