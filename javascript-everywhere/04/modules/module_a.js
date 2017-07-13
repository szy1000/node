console.log('a');


//暴露API
exports.name = 'join';
exports.data = 'I am data';

var privateVariable = 5;

exports.getPrivate = function() {
	return privateVariable;
}