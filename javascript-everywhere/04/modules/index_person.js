module.exports = Person;

function Person(name){
	this.name = name;
}

Person.prototype.show = function(){
	console.log('My Name:' + this.name);
};