var fs = require('fs');

console.log("Executed Before File Reading.");

var data = fs.writeFileSync('./write','Hello there!','utf8');
// var data = fs.writeFileSync('./file/write','Hello there!','utf8',function(error){
// 	if(error) throw error;
// 	console.log('file writen');
// });
console.log('file Done');

console.log("Executed After File Reading.");