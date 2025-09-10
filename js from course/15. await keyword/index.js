// note : we can't use await keyword without async function

//Await is the keyword that is use for pause the other excutation until present excutaion is not complete.

// function data() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let internet = Math.floor(Math.random() * 10) + 1;
//       console.log(internet);
//       resolve();
//     }, 1000);
//   });
// }

// async function get() {
//   await data();
//   await data();
//   await data();
// }

// console.log(get());

//Handling rejection with await

function data() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let internet = Math.floor(Math.random() * 10) + 1;
      if (internet < 3) {
        reject("spped is low");
      }
      console.log(internet);
      resolve();
    }, 1000);
  });
}

async function get() {
  try {
    await data();
    await data();
    await data();
  } catch (reject) {
    console.log(reject);
  }

  //   console.log(
  //     "When error is throw then other is not excute therefore we can use try and catc"
  //   );
  let a = 5;
  console.log(a);
}

console.log(get());
