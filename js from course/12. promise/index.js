// PROMISE : Promise is object that is the represent  the success and failaure if promise is success then store the value in the onject.in which we have three state for it first is accept and second is reject and third is pending

// method for Promise.
// 1. then(): means if promise is pass then is use for futher Information.
// 2. catch() : means if promise was rejected then catch is use for futher information.

// function savedata(data) {
//   return new Promise((resolve, reject) => {
//     let internetspeed = Math.floor(Math.random() * 10) + 1;
//     if (internetspeed > 4) {
//       resolve("DATA IS SAVED");
//     } else {
//       reject("DATA IS FAIL");
//     }
//   });
// }

// let req = savedata("UMESH");
// req.then(() => {
//   console.log("promise is resolve.");
// });
// req.catch(() => {
//   console.log("Promise is not reslove ");
// });

// console.log(req);

//PROMISE CHAINING
// second method
// savedata("umesh")
//   .then((result) => {
//     console.log("PROMISE IS SUCCESS");
//     console.log("Result is : ", result); // result is the resolve and error is the reject
//     return savedata("KANNAT");
//   })
//   .then((result) => {
//     console.log("PROMISE2 IS SUCCESS"); // all the process is called promise chaining
//     console.log("Result is : ", result);
//     return savedata("KHYATI");
//   })
//   .then((result) => {
//     console.log("PROMISE 3 IS RESOLVE.");
//     console.log("Result is : ", result);
//   })
//   .catch((error) => {
//     console.log("PROMISE WAS FAILED");
//     console.log("Error is : ", error);
//   });
