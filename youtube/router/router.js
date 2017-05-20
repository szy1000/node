var express = require("express");
var app = express();
var router = express.Router();

// app.get('/', function (req, res) {
// 	res.end('Hey there!');
// });

// app.get('/second', function (req, res) {
// 	res.end('Hey second page!');
// });

app.use('/home', router);

router.get('/first', function (req, res) {
	res.end('Hey first page!');
});

router.get('/second', function (req, res) {
	res.end('Hey second page!');
});

app.listen(9090,function(){
	console.log("Listen at 9090!");
})