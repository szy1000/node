//how to read files

// var fs = require('fs');

// console.log("Executed Before File Reading.");

// fs.readFile("./file",'utf8',function(error,data){
// 	console.log(data);
// });

// console.log("Executed After File Reading.");
// --------------------------------------------------
// Executed Before File Reading.
// Executed After File Reading.
// This is one 

// file   

// with   some
 
// line!
// --------------------------------------------------

var fs = require('fs');

console.log("Executed Before File Reading.");

var data = fs.readFileSync('./file','utf8');
console.log(data);

console.log("Executed After File Reading.");

// 同步执行