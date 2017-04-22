// Events and EventEmitter

var events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on('myCustomEvent',function () {
	console.log('Event Fired');
});

setTimeout(function() {
	eventEmitter.emit('myCustomEvent');
}, 2000);

// ------------------------------------------------

eventEmitter.on('add',function(arg1, arg2) {
	console.log(arg1 + arg2);
});

setTimeout(function() {
	eventEmitter.emit('add','1','2');
},2000);
//document.querySelector('your tag').onclick = function() { ... }