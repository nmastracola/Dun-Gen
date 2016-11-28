// 'server' snippet

// To upload tables to our remote server, you first need to create a server controller, like the example provided.
// This will give postman endpoints to allow you to enter information there.
// You will also need to create a schema which will control the types of data that go into your tables
// That schema will be found in the models folder, and will be in a format similar to example.js
// The names will obviously change, depending on what your table is.
// Remember to require your controllers, and to make sure your endpoint URLs match up.

// Also don't forget to    npm init -y    and    npm install     when you first clone the repo
// All the dependencies we need should already be listed in the package.json, so you dont need to specify.

// Let me know if you have any problems.
// <3<3 Matty Poo

var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
app.use(bodyParser.json());
app.use(cors());


app.use(express.static(__dirname + './../public'));
// CONTROLLERS
var serverExampleCtrl = require('./controllers/serverExampleCtrl');
// var serverMessageCtrl = require('./controllers/serverMessageCtrl');

// 'end' snippet
// EXAMPLE ENDPOINTS
app.get('/api/example', serverExampleCtrl.read);
app.post('/api/example', serverExampleCtrl.create);
app.put('/api/example/:id', serverExampleCtrl.update);
app.delete('/api/example/:id', serverExampleCtrl.delete);

// // MESSAGE ENDPOINTS
// app.get('/api/message', serverMessageCtrl.read);
// app.post('/api/message', serverMessageCtrl.create);
// app.put('/api/message/:id', serverMessageCtrl.update);
// app.delete('/api/message/:id', serverMessageCtrl.delete);



var port = 3000;
var mongoURI = 'mongodb://basementboss:imdabes@ds157667.mlab.com:57667/basementboss';
mongoose.set('debug', true);
mongoose.connect(mongoURI);
mongoose.connection.once('open', function(){
  console.log('Connected to database');
  app.listen(port, function(){
    console.log('Server listening on port: ' + port);
  });
})

// app.listen(port, function(){
//   console.log('Server listening on port: ' + port);
// });