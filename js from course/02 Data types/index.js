alert("data type");

// There are two type data type in js.
// 1 primitive (7)
// 2 Non primmitive (Object) object is collection of primitive data type.

// NOTE TYPE OF IS USE FOR KNOW THAT WHAT IS DATA TYPE.

// Primitive Data Type.
let fullName = "UMESH FARKADE";
console.log(fullName, typeof fullName);

let age = 19;
console.log(age, typeof age);

let are_marrige = false;
console.log(are_marrige, typeof are_marrige);

let death = undefined;
console.log(death, typeof death);

let friend = null;
console.log(friend, typeof friend);

// object data type
const proFile = {
  fullName: "UMESH FARKADE",
  age: 19,
  are_marrige: false,
  death: undefined,
  friend: null,
};

console.log(proFile["age"]);
