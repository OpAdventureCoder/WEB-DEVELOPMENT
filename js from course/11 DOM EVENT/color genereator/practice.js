let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let h1 = document.querySelector("h1");
  let rand = randomcolor();
  h1.innerText = rand;

  let div = document.querySelector("div");
  div.style.backgroundColor = rand;
});

function randomcolor() {
  let green = Math.floor(Math.random() * 255);
  let red = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = `rgb(${green},${red},${blue} )`;
  return color;
}
