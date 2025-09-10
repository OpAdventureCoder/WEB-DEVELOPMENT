//NODE JS : it's javascript runtime envirment . it's use to run the javascript outside brower
//  for version check  = node -v

// NOTE : NODE JS MEANS JAVASCRIPT  RUN OUTSIDE THE BROWSER  means js ko terminal me chalane ke liye node.js chahiye hota hai.

// when you want to run your js through the node.js then use command "node" in terminal then  node se exit ke liye " . exit" likhe . isme dom kam nhi karta hai but isme global hota hai

// Node js ke help se javascript ko terminal me run karne ke liye "Node file name" likh kar run kar de.

// process : it's by default object that provides information about, and control over, the current Node.js process.how to reachout go on terminal then enter in node js the  write proccess.

// process.aegv : returen an array containing the command-line arguments passeed when the node.js process was launched. that means isko file me likh jata hai aur jiase promt se input lete hai waise hi user se arrgument lete in trminal and store in array. it's take the value from user in terminal and use in program.

// let arr = process.argv;
// for (let i = 2; i < arr.lenght; i++) {
//   console.log("hello friends", arr[i]);
//   console.log(process.argv);
// }

// console.log(arr);

// the output after jab nodejs me input lete hai tab
// [
//   "C:\\Program Files\\nodejs\\node.exe",
//   "D:\\WEbdevelopment by apna college\\Practice\\nodejs.js",
//   "Khayti",
//   "umesh",
// ];

//NOTE : JAB KISI FILE SE DATA SEND KARNA HO
// export (module.export): that is use for export the function and their properties that means dusri file se data ko  kisi dusri file me le kar jana through " require()". it's woking only in same repo.More information in math.js .that means math.js se infomation ko index.js me use karna so..

//module.export : isko us file me use karte hai jis se data send karna ho  tusri file me.
// require(repogetry name) : is function ka usme use karte hai jisme data get karna ho

// let get = require("./math"); //require means data get kiye hai math .sj file se
// console.log(get);

//NOTE : JAB KISI FOLDER KO KI EXPORT KARNA Ho
// when we want to export the information  like hamre pass ek folder hai  jiska name fruit jhai jisme two files hai apple and oregne in dono ko usi folder ki index.js me export karege but file ka name index hi hona chiye. kyu main folder index ko hi search karta hai . jab index me  export ho jaye tab ham dusre folder me require kar skate hai

// let fruits = require("./fruit");
// console.log(fruits);
