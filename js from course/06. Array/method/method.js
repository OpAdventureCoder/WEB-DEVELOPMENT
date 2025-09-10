//basic array method array
//01.Length : returen the size of an array
let arr = ["Umesh", "Kannat", "Pankaj", "Kunal", "Himanshu"];
// console.log(arr.length);

//length can also use for set the length of array.
// console.log((arr.length = 3), arr);

//02.tostring():that is convert the array into sting
// console.log(arr.toString());

//03.at(): return the by using the indexing.It's was introduce for reslove the negative indexing
// console.log(arr.at(2));

// 04.join():method also joins all array element into a sting
// console.log(arr.join("*"));

// 05.pop(): remove the last element
// console.log(arr.pop());

// 06. puhsh(): add the element in the last
// console.log(arr.push("Devendre"), arr);

// 07.shift():remove the element from the first
// console.log(arr.shift(), arr);

// 08.unshift():add the element in the first
// console.log(arr.unshift("khel"), arr);

// 09.concat():merge the array and create a new array
let arr1 = ["BMW", "HONDA", "LEMBERGINI"];
// console.log(arr.concat(arr1));

// 10. copywthin() : copies the array element to another position in an array
// console.log(arr.copyWithin(3, 0));

// 11. splice() : use for add the new element
console.log(arr1.splice(1, 0, "MARC"), arr1); //splice(index jaha se start karna hai , jo delete karna uski index , jo add karna )

// 12.slice() : given the part of array (start, end )
console.log(arr1.slice(0, 2));
