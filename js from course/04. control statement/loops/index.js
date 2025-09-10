alert("Loop - for, While , Do while , for of , for in loops.");

// for loop

// for (let i = 1; i <= 10; i++) {
//   console.log("apna college");
// }

// Here "let i = 1 " is initilize and "i<=10" is stoping  and "i++" update

// calculate the sum of 1 to 5 Number.

// let sum = 1;
// for (let i = 1; i <= 5; i++) {
//   sum = sum + i;
// }
// console.log("sum + i = ", sum);

// Infinite loop
// NOTE DON'T USE IN YOUR COMPUTER

/*for(let a = 0 ; a>=10; i++){
    console .log(a)
}*/

// while loop same in working like for
// let a = 1;
// while (a <= 3) {
//   console.log("a++", a);
//   a++;
// }

// DO While loop - IN this loop atlest one time execute.

// let user = 20;
// do {
//   console.log(user);
// } while (user <= 10);

// for of - In this types use for  arry and string that means it's use as iterator

let str = "UMESH ";
let size = 0;
for (let i of str) {
  console.log(i);
  size++;
}
console.log("size of string", size);

// for in  loop use as object

let student = {
  Name: "UMESH",
  Age: 25,
  Class: 12,
};

for (let key in student) {
  console.log("key = ", key, "value", student[key]);
}
