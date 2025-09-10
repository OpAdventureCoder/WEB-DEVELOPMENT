// call stack : means ek function ke through dusre ko call karna such as

// function one() {
//   return 1;
// }

// function two() {
//   return one() + one();
// }

// function three() {
//   let sum = two() + one();
//   console.log(sum);
// }
// three();

// NOTE : We can track our callstack by using the breakpoint. breakpoint is the method that is used for debugging that mens through it we can check how to run program step by step

// BREAKPOINT : Go to console then source then go to top and select file then set breakpoint after that refres it then down side show some function  and apply it. you can see your code in scope in right side in down

// JS IS SINGLE THREAD : that means java script can one work in one time.but broweser  multithread

// asynchronous nature of js : because js is single threded language that means that is excute anything one by one don't wait for other but some time when we called the API then request is late then for this problem we can use settimeout , call back  etc. because browser is multi threaded and excuted according ot it.that Nature is called asynchronous of javascript.such as

//CALLBACK HELL

//callback hell se bachne ke liye promise and asyno function ka use karte hai.

// let h1 = document.querySelector("h1");
// function changecol(color, delay, nextcol) {
//   setTimeout(() => {
//     h1.style.color = color;
//     if (nextcol) nextcol();
//   }, delay);
// }

// changecol("red", 1000, () => {
//   changecol("blue", 1000, () => {
//     changecol("green", 1000);
//   });
// });

// other example for callback
function saveData(data, resolve, failure) {
  let internet = Math.floor(Math.random() * 10) + 1;
  if (internet > 4) {
    resolve();
  } else {
    failure();
  }
}

saveData(
  "UMESH",
  () => {
    console.log("data is save");
    saveData(
      "10",
      () => {
        console.log("CGPA IS 10");
      },
      () => {
        console.log("CGPA IS NOT STORE");
      }
    );
  },
  () => {
    console.log("Data is Not save");
  }
);

//NOTE: WE HAVE PROMISE FOR SOLVE THE CALLBACK PROBLEM
