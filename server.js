if (!process.env.NODE_ENV) process.env.NODE_ENV='development'

var express = require('express')
  , http = require('http')
  , path = require('path')
  , reload = require('reload')
  // , cars = require('./server/api/cars'),
  colors = require('colors'),
  fs = require('fs');

var app = express()

var clientDir = path.join(__dirname, 'client')

app.configure(function() {
  app.set('port', process.env.PORT || 3000)
  app.use(express.favicon())
  app.use(express.logger('dev'))
  app.use(express.bodyParser()) 
  app.use(app.router) 
  app.use(express.static(clientDir)) 
})

app.configure('development', function(){
  app.use(express.errorHandler());
})

// // http://stackoverflow.com/questions/7067966/how-to-allow-cors-in-express-nodejs
// app.all('/*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", 'Content-Type, X-Requested-With');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
//     next();
// });
// // handle OPTIONS requests from the browser
// app.options("*", function(req,res,next){res.send(200);});


app.get('/', function(req, res) {
  res.sendfile(path.join(clientDir, 'index.html'))
})

app.get('/api/posts', function(req, res) {
	var file = __dirname + '/data.json',
		json_data = null;
	fs.readFile(file, 'utf8', function (err, data) {
		if (err) {
			console.log('Error: ' + err);
			return;
		}

		this.json_data = JSON.parse(data);
	});
	console.log(this.json_data);
	res.json({this.json_data});
})



 

// app.get('/api/cars', cars.list) 

// app.get('/api/cars/total', cars.total) //placement matters

// app.get('/api/cars/:id', cars.read) //sometimes called 'show'
// app.post('/api/cars', cars.create)
// app.put('/api/cars/:id', cars.update)
// app.del('/api/cars/:id', cars.del)

// var allowCrossDomain = function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      
//     if ('OPTIONS' == req.method) {
//     	res.send(200);
//     }
//     else {
//     	next();
//     }
// };

var server = http.createServer(app)

reload(server, app)

server.listen(app.get('port'), function(){
  console.log("Web server listening in %s on port %d", colors.red(process.env.NODE_ENV), app.get('port'));
});