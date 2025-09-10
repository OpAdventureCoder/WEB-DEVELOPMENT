// alert("ARRAYS");

// NOTE: 1.Array are mutable that means we can change anything in array.
//  2.In Java Script array we can create a mix aaray. such as
// let arr = ["UMESH", 23, "Kannat", 30];
// 3.array refference me array same nhi hota hai such
// [1]==[1] is not same array
// [1]===[1]
// 4.array is special type of object when we are check typeof then it's show the object

// method of decleation of array by index
// let student = [];
// student[0] = "Khyati";
// student[1] = "Khushi";
// student[2] = "Unnati";
// console.log("The name of student:", student);

// second type declareation of an array /
// let student = ["UMESH", "KANNAT", "PANKAJ", "KHYATI"];
// console.log(student);

// Accessing Array Elements by index number
// console.log(student[2]); // output = panakj

// changing in array element
// student[0] = "Khushi";

//convert array to string by using the tostring()
// console.log(student.toString());

//Array as Object
// let students = [
//   { username: "Umesh", age: 20, gender: "male" },
//   {
//     username: "Kannat",
//     age: 21,
//     gender: "male",
//   },
//   {
//     username: "khyati",
//     age: 19,
//     gender: "female",
//   },
// ];

// console.log(students);

// // how to access object
// console.log(students[0]); //It's given the first object.

// //how to access object element
// console.log(students[0].username);

// property of array is length
let student = ["UMESH", "KANNAT", "PANKAJ", "KHYATI"];
console.log(student.length);

//accessing the last vlaue of array
console.log(student[student.length - 1]);
