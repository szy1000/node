var express = require("express");
var app = express();
var router = express.Router();

app.use('/users', router);

router.get('/:first', function (req, res) {
	res.end(JSON.stringify(req.params));
});

// router.get('/:first/:second', function (req, res) {
// 	res.end(JSON.stringify(req.params));
// });

router.get('/:first(\\w+)', function (req, res) {
	res.end(JSON.stringify(req.params));
});

app.listen(9090,function(){
	console.log("Listen at 9090!");
})