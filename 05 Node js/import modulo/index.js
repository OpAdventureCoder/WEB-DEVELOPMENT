// import module similar to require but difference is in import we have choise for specific part is get .

// NOTE : 01. In  import modulo  data transfer ke liye only "EXPORT" likhte hai
// 02. if you want to use import modulo then  you must have to create package.json  in same repo. and  in which add type= " module".

// syntex for import : import{specific thing} from "./file name with extension"

// require vs import : import is new thing in js and import give the option for export and dont wait for line by line excution ex in maths.js me hai
// step for import
// step 1 npm init
// step 2 package-json me  type = "module"; dalna padta hai

import student from "./word.js";

console.log(student);
