let age = parseInt(prompt("Enter your Number"));

if (age < 18) {
  console.log("you are not eligible");
} else if (age >= 18 && age <= 60) {
  console.log("your are eligible");
} else {
  console.log("you are senior citizen");
}

// note: in switch case camparion is follow strictly.
switch (true) {
  case age < 18:
    console.log("yoy are not eligible");
    break;
  case age >= 18 && age <= 60:
    console.log("you are eligible");
    break;
  default:
    console.log("your are senior citizen");
}
