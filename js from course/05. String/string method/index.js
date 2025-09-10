// alert("String Method");

//we can decalre a string with single or double qoutes.
// let userName = "UMESH FARKADE";
// console.log("The name is : ", userName);

//1. length : use to calculate the size
// console.log("The lenght is :", userName.length);

//2. At(),charAT(),charCodeAt() : access the specific index.

// console.log("The index[1]:", userName[1]);              // Output : M
// console.log("The index[3]:", userName.at(3));            //Output : S

//It's not support negative index
// console.log("The index[4]:", userName.charAt(4)); //Output : H
// console.log("Output through the negative indexing", userName.at(-9));

//3.trim():remove the white spaces from both side.In which we two other function 1. trimstart() , 2.trimend()
// let userName1 = "  KANNAT     ";
// console.log(userName1.trim());
// console.log(userName1.trimEnd());

//4. Concatenation : use to add other string.
// let firstName = "UMESH ";
// let fullName = firstName.concat(" FARAKDE");
// console.log("The fullNAME is :", fullName);

// let add = userName1 + userName;
// console.log(add);

//5. slice() : get the string part from orignal and create new.
// let fullName = "UMESH FARKADE";
// console.log("The part of string :", fullName.slice(2, 8)); //slice(start,end);

//6. touppercase , tolowercase: upper case convert a string into upper and lower convert into lower.
//above the we have a string in uppercase that can convert into in lowercase
// console.log("convert into lowercare", fullName.toLowerCase());

//7. Repeated : how many times you wnat to copies of string. repeat(count);
// let fullName = "UMESH FARKADE ";
// console.log("create a four copy of the string : ", fullName.repeat(2));

//8. repalce , replaceall() : means change with other.
// let para = "Hey! I'm UMESH.";
// console.log("Before change : ", para);
// console.log("UMESH is replace with Kannat :", para.replace("UMESH", "KANNAT"));

// Now here we want to change whole para then.
// console.log(
//   "After change : ",
//   para.replaceAll("Hey! I'm UMESH.", "hello I'm KANNAT.")
// );

//String search method
let string = "My name is umesh";
console.log(string.startsWith("My"));
