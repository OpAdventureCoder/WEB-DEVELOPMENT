// Objects : it is store key collection and complex entitiy.
// Note : It's good practice that is use const keyword for creating the variable

// const student = {
//   User: "Umesh",
//   age: "21",
//   gender: "Male",
// };

// accing the element by two method.
// console.log(student.User); //this is first Type.
// console.log(student["age"]); //This is second Type.

//Adding and delete and  updating in object
// student.User = "UMESH";

// delete keyword use for delete any properties
// delete student.gender;

// adding the new key value in object
// student.Branch = "AIML";
// console.log(student); // it is use for display the object

//object of object
// const Branch = {
//   student1: {
//     user: "UMESH",
//     Age: "19",
//   },
//   student2: {
//     user: "Kannat",
//     Age: "19",
//   },
//   student3: {
//     user: "Khyati",
//     Age: "19",
//   },
// };

// console.log(Branch.student1);

//Array of Object
// const Branch = [
//   {
//     user: "UMESH",
//     Age: "19",
//   },
//   {
//     user: "Kannat",
//     Age: "19",
//   },
//   {
//     user: "Khyati",
//     Age: "19",
//   },
// ];

// console.log(Branch[0]);

// Object constructor
// when we need to create an object a same name then use constructor
// function Branch(user, age, Branch) {
//   this.user = user;
//   this.age = age;
//   this.Branch = Branch;
// }

// const student1 = new Branch("UMESH", "18", "AIML");
// const student2 = new Branch("Kannat", "18", "AIML");
// const student3 = new Branch("Khyati", "18", "AIML");

// console.log(student1);
