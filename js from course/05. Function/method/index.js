//Method are action that can be performed on an object. that means when we are decalre a function in the object that is called method
// const cal = {
//   add: function (a, b) {
//     return a + b;
//   },
//   mul: function (a, b) {
//     return a * b;
//   },
// };

// console.log(cal.add(4, 8));

// we can also write like this
const cal = {
  add(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  },
};
console.log(cal.sub(6, 3));

//The Major difference between the call() and apply()
//01.call(): it's take argument separately
//02.apply() : take argument as an array

// Function bind() : that means , an Object can borrow a method from another object.

const person = {
  firstname: "UMESH",
  lastname: "FARKADE",
  fullname() {
    return this.firstname + " " + this.lastname;
  },
};

const member = {
  firstname: "KANNAT",
  lastname: "FARKADE",
};
let fullname = person.fullname.bind(member); // yeha per hamne member ki property use ki hai
console.log(fullname());
