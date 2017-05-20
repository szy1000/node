var methods = {};

// methods.aaa = function () {
// 	console.log("aaa");
// }

// methods.bbb = function () {
// 	console.log("bbb");
// }

// methods.ccc = function () {
// 	console.log("ccc");
// }

// var reslut = 1;
this.reslut = 1;
methods.add = function(a,b){
	result = a + b;
	return result;
}

methods.multiply = function (a,b) {
	result = a * b;
	return result;
}

exports.data = methods;

// exports.result = result;