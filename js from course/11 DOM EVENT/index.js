let btns = document.querySelectorAll("button");

// onclick : it's perform the action on the click function
// btns.onclick = function () {
//   alert("Hello");
// };

//onmousecenter : when we are hover the button then perform the action
// btns.onmouseenter = function () {
//   alert("Say! Hello");
// };

// NOTE : oneclick is work only for one time so as compare to use addEventListiner

//AddEventListner(event , callback) : callback means function.

for (let btn of btns) {
  btn.addEventListener("click", sayhello);
  btn.addEventListener("click", sayumesh);
}

function sayhello() {
  alert("HELLO");
}
function sayumesh() {
  alert("UMESH");
}

// This keyword in addEventListener
// Here this means jo object ki property show karta hai.
// let btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//   // here console this refer to btn in the front of addeventlistener
//   // console.log(this);
//   alert("HEllo");
// });

//NOTE : this key word tab use me aata hai jab multiple object per event listener laga ho exapmle
// let btn = document.querySelector("button");
// let p = document.querySelector("p");
// let h1 = document.querySelector("h1");

// function change() {
//   this.style.color = "red";
// }

// btn.addEventListener("click", change);
// p.addEventListener("click", change); //when you click the object then run it.
// h1.addEventListener("click", change);

// NOTE : addeventlistener me ek default object hota hai callback me jo information deta hai ki konsa action
//        perform hua hai aur uski value kya hai exmple
// syntex = addEventListener("click", function (event) {});

//KEYBOARD ACTION

// let input = document.querySelector("input");
// input.addEventListener("keydown", function () {
//   console.log("key was pressed");
// });

//keybord action me to value important hoti hai first is key and code, inn dono ke through aap pata kar sakte ho ki kya action perform hua and value kya hai
// input.addEventListener("keydown", function (event) {
//   console.log(event); // given the information about the key and code
//   console.log(event.key); // provide the value that are input by user
//   console.log(event.code); // provide the what key is pressed
//   console.log("key was pressed");
// });

//FORM EVENT LISTENERS

// let form = document.querySelector("form");
// form.addEventListener("submit", function () {
//   alert("Form is submited ");
// });

//  // get error because we don't have path so hame dusre page pe jane rokne ke liye event prevent ka use karte hai

// let form = document.querySelector("form");
// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   alert("Form is submited ");
// });

//now it's not given error that means not transfer to onther page.

//extracting data from the form
let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  let text = document.querySelector(".text");
  console.log(text.value); // In form for value access innertext is not work , work it value

  let pass = document.querySelector(".pass");
  console.log(pass.value);
  //queryselector ki jag this.element ka use karte hai kyu ki  har elemnt ke liye class set nhi kar sakte hai

  // let text = this.elements[0]; // 0 means select first object element
  // console.log(text.value);
  // let pass = this.elements[1]; // 1 means select second object element
  // console.log(pass.value);
});

//change eventlistener : track the change from start and end. work only for input and selection and textarea
// let text = document.querySelector(".text");
// text.addEventListener("change", function () {    // ager aap screen per bhi click karte hai to change triger ho jata
//   console.log(this.value);
// });

//input : track any single change
// let text = document.querySelector(".text");
// text.addEventListener("input", function () {
//   console.log(this.value);
// });
