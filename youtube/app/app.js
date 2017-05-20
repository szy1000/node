var express = require('express');
var bodyParser = require('body-parser');
var sessions = require('express-session');

var session;

var app = express();

app.use(bodyParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(sessions({
	secret: 'fsjfkslfs#@!#',
	resave: false,
	saveUninitialized: true
}));
// app.use('/cssFile', express.static(__dirname + '/assets'));

app.get('/', function(req, res) {
	res.sendFile('./login.html', {root: __dirname });
})
app.post('/', function(req, res){
	res.end(JSON.stringify(req.body));
	session = req.session;
	if(req.body.username == 'admin' && req.body.password == 'admin') {
		session.id = req.body.username;
	}
});

app.get('/redirects', function(req, res){
	session = req.session;
	if(session.id){
		console.log('admin page');
		res.redirects('/admin');
	} else {
		res.end('Who are you?');
	}
})
app.listen(9090,function() {
	console.log('Listening at Port 9090');
})