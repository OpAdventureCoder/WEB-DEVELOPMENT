// Try : define a block of code to run that means tested while it will be run and given the error.
//Catch : catch function is use for handing the error.
// throw : It's use for throw the customize error.
// finally: it's  in function when we return the value after that function is excute so, function excute na ho sake and continue run kare aur aage ka programe run ho.

// function sum(a, b) {
//   try {
//     if (b == 0) {
//       throw new Error("not divided by zeros");
//     }
//     let total = a / b;
//     console.log(total);
//     return true;
//   } catch (Error) {
//     console.error(Error.message); // here we can use error parameter of throw for generate an error.
//     return false;
//   } finally {
//     console.log("Function is completely run");
//   }
// }

// // console.log(sum(10, 2)); // vaild for try block
// console.log(sum(2, 0)); // throw error and go into catch block

// try {
//   console.log(a);
// } catch (err) {
//   console.error("syntex error", err.message);
// }
