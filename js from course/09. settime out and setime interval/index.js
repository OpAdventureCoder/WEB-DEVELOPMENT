// setTimeout function
// syntex : settimeout (function, timeout)  : here function is callback and 4000 means 4s
// console.log("KHYATI");
// setTimeout(() => {
//   console.log("Hey! I'm UMESH FARKADE");
// }, 4000);
// console.log("PANKAJ");

//setinterval : means take same time for run again and again
// setInterval(() => {
//   console.log("UMESH");
//   console.log("KHYATI");
// }, 4000);

let id = setInterval(() => {
  console.log("kannat");
  console.log("KHYATI");
}, 3000);

// clearInterval(id) : this function is used when we want to stop the any funnction
clearInterval(id); // here it's stop the id varible
