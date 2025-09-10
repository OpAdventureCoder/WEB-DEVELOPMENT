// alert("DOM PART 01");

//DOM : It's stand for DOCUMENT OBJECT MODEL.

// Method for access the element.
// 01. By Id
// let id = document.getElementById("description");

// console.log(id); // it's use for the print.
// console.dir(id.innerText); // through this we can access the object and in which we some properties.

// //02. by class
// let clas = document.getElementsByClassName("boxLink");
// console.log(clas);

// // 03. by tagname
// let bytag = document.getElementsByTagName("p");
// console.dir(bytag[0].innerText);

// // 04.Query Selector : It's single tag that is use for get all element.
// let byid = document.querySelector("#description"); // access for id
// console.log(byid);

// let byclass = document.querySelector(".boxLink"); //access for class
// console.log(byclass);

// let tagname = document.querySelector("p"); // access for tag
// console.log(tagname);

//NOTE : querySelectorAll is use for access the all element that are access like class  to puri classes

// manipulation properties.
// innerText : show to text of the page.
// innerHTMl : show the html tag.
// innerContent : Show the all hidden content.

// MANIPULATION BY ATTRIBUTE VALUE
// 01.GetAttribute : for get vlaue.
// let id = document.querySelector("#description");
// console.log(id);
// let value = id.getAttribute("id");
// console.log(value);

// 02. SetAttributes : set the attributes value.
// // SyntaxError: SetAttributes(attributes,value) jo change karna chahte ho.
// let id = document.querySelector("#description");
// id.setAttribute("id", "main");
// console.log(id);
// let value = id.getAttribute("id");
// console.log(value);

// NOTE : SET ATTRIBUTE IS ONLY FOR SET THE VALUE WE CAN'T ACCESS THE VALUE THROUGH IT.

//MANIPULATION STYLE
// let bystyle = document.querySelector("h1");
// bystyle.style.color = "red";
// bystyle.innerText = "Hello I'm Umesh"; //yeh per content ko change kar rhe hai.
// console.log(bystyle);

//NOTE : MANIPULATION STYLE WORK ONLY FOR INLINE STYLE WE CAN'T ACCESS THE CSS FILE.

//NOTE : SETATTRIBUTE NOT USE FOR STYLING BECAUSE IT SET THE ONE VALUE IN ONCE TIME.

//MANIPULATION BY CLASS
// 01. Classlist : it's use for check the class is present or not.
// let a = document.querySelector("h1");
// console.log(a.classList); // now class vlaue is null

// //02. classlist.add() : use for add the class value.
// a.classList.add("heading");
// console.log(a.classList); // now vlaue is heading.

// //03. classlist.remove() : remove the class.
// a.classList.remove("heading");
// console.log(a.classList); // now class is remove from heading.

//04. classlist.contain() : to check if class is exit or not.
// a.classList.contains("heading");
// console.log(a.classList);

//05. classlist.toggle(): if class is add then tab remove kar deta hai
// console.log(a.classList.toggle("heading")); // ab class add ho gyi to true dega

//NAVIGATION ON PAGE
// let b = document.querySelector("h1");
// console.log(b.parentElement); //it's given h1 parents name.

// console.log(b.childElementCount); //it's given h1 child node

// previouselementsibling and nextElementSibling

//Adding the element on the page.
// 01. createElement : It's use for create a new element
let a = document.createElement("p");
a.innerText = "Hello I'm UMESH FARKADE.";
console.log(a);

// 02. appendChild() : it use for show the element on page.

let body = document.querySelector("body");
console.log(body.appendChild(a)); // This line add the element in last of it's parents.

// // 03.  append() : through this we can add some in old element or create a new element.
// a.append("Hello! I'm KANNAT FARKADE.");

let button = document.createElement("button"); // here we are create a new button now we are adding the button with paragraph
button.innerText = "Click me";

console.log(body.appendChild(button));

// a.append(button); // here we are append the button with paragraph.

console.log(body.appendChild(a));

// 03. preappend() : it's use for add the element on top of the page.
// let a = document.createElement("button");
// a.innerText = "Login In";

// let body = document.querySelector("h1");
// console.log(body.prepend(a));

// 04. insertAdjecentElement(where , element)
// let a = document.createElement("button");
// a.innerText = "click me";

// let b = document.querySelector("p");
// b.insertAdjacentElement("beforebegin", a); //like that we have more option
// console.log(b);

//05. removeChild() or remove(element) : It's use for remove the element
// let a = document.querySelector("p");
// a.remove("p");
