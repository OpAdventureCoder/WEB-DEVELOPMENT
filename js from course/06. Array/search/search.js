// many types of searches
//01. indexof : if element is present in it then return it index. or not find then return -1
let arr = ["UMESH", "KANNAT", "PANKAJ"];
console.log(arr.indexOf("KHYATI")); //OUTPUT : -1

// 02. include() : return true if an element value is present in an array
// console.log(arr.includes("UMESH"));  //OUTPUT : Ture

// 03. find(): return the value and pass the test case

let arr1 = [1, 2, 3, 85, 78];
let check = arr1.find(myfunction);
function myfunction(x) {
  return x > 58;
}
console.log(check);
