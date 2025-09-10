// API :stand  for the application programming interface. it's return some data in the form of JSON Format.

// NOTE : XML is also a way to get api request in which we can tag like html

// JOSN : JAVAscript object notation , for more information go to www.JOSN.org
//         In which object key is always string. example.
//  {
//     "key" : data
//  }

//NOTE : If you want to check you json data is right or wrong then use JSON validator.

//ACCESSING THE JSON DATA.
// JSON is always come in the form of JOSN DATA STRING that means accessing the data from JOSN into js object.

//01.Json.PARSE(data)Method : to PARSE A STRING DATA INTO A JS OBJECT. that means access the data into js object. such as
// let jsonres =
//   '{ "fact": "Cats spend 2/3 of their day sleeping.","source": "PetMD"}';

// let validData = JSON.parse(jsonres);
// console.log(validData); //after that it's given data into proper data object
// console.log(validData.fact);

// JSON.stringify(JOSN)METHOD : TO stringify A JS OBJECT DATA INTO JOSN that means convert the js object into json data.

// let student = {
//   UserName: "UMESH",
//   branch: "AIML-CSE",
// };

// let json = JSON.stringify(student);
// console.log(json); //given the output in the form of json data

// API TESTING TOOLS
// 1 Hoppscoth.io :  we will use for api. free api link : https://catfact.ninja/fact
// 2 Postman

// AJAX  : Asynchronous Javascript And XML It means API called proccess ko AJAX KAHTE hai

// js ------>request---->API------>js

// http verb likes 01. get  : it's use for get the information form the server,
//                 02. post : it's use for when we want to post infomation
//                 03. delete : when we want to delete the infomation from the server.

// NOTE : other form is use when we are creating server side code.

// http status code : 200 ok , 404 - not found , 400 - Bad Request , 500 - internal server error

//Additional information in URL :  google.com /serach?q=money:id   //here q is key and money is value : id is working like variable

// http header : It's provide the additional information about the api and how to see
//   go to inspect then go to network tab in which we have two types of header.
//   1. request header
//   2. response header

// we can also send the additional information in header like meta information means infoamtion about information

// fetch use for sending the request to API and this method return a promisen when request send to server  afetr that given the response in which we have only readable stream in body if you want to print data then use .Json() function.
// SYNTEX FOR SENDING THE API REQUEST : fetch(url)

// Our First API Request.
// let url = " https://catfact.ninja/fact";

// fetch is use for sending the API request.
// fetch(url) //it given a promise then we can futher response is add.
//   .then((resp) => {
//     console.log(resp);
//     return resp.json(); // successfully run futher enter in then then given the data
//   })
//   .then((data) => {
//     console.log(data.fact);
//   })
//   .catch((err) => {
//     console.log("error", err);
//   });

//API CALL THROUGH THE SAYNC FUNCTION

// async function get() {
//   try {
//     let set = await fetch(url);
//     let data = await set.json(); //in this function add try and catch for continue excutaion
//     console.log(data.fact);
//   } catch (err) {
//     console.log(err);
//   }
// }

// get();

// / AXIos : is libary that is use for make to send the http request for API .it's better because it's given direct readable response
// async function getfact() {
//   try {
//     let res = await axios.get(url);

//     console.log(data.fact);
//   } catch (e) {
//     console.log(e);
//   }
// }

// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//   let fact = await getfact();
//   console.log(fact);
//   let p = document.querySelector(".result");
//   p.innerText = fact;
// });
// let url = "https://catfact.ninja/fact";

// async function getfact() {
//   try {
//     let res = await axios.get(url);
//     return res.data.fact;
//   } catch (e) {
//     return "NO FACT";
//   }
// }

// sending the headder with API request for convert the data into json form
const url = "https://icanhazdadjoke.com/"; // when you call this api the send the data in the form of html so use header for proper data

async function fact() {
  try {
    const config = { headers: { Accept: "application/json" } }; //add header for proper data
    let res = await axios.get(url, config); // send the header as second arrgument
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
}

console.log(fact());
