// 'server' snippet

// EXTERNAL MODULES //
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');

// CONFIG //
var config = require('./config');

// CONTROLLERS //
var serverMFPopulateCtrl = require('./controllers/serverMFPopulateCtrl');
var serverUserCtrl = require('./controllers/serverUserCtrl');

// SERVICES //
var passport = require('./services/passport');

// POLICIES //
var isAuthed = function(req, res, next) {
  if (!req.isAuthenticated()) return res.status(401).send();
  return next();
};

// EXPRESS //
var app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + './../public'));

// SESSION AND PASSPORT //
app.use(session({
  secret: config.SESSION_SECRET,
  saveUninitialized: false,
  resave: false
}));
app.use(passport.initialize());
app.use(passport.session());

// PASSPORT ENDPOINTS //
app.post('/login', passport.authenticate('local', {
  successRedirect: '/me'
}));
app.get('/logout', function(req, res, next) {
  req.logout();
  return res.status(200).send('logged out');
});

// USER ENDPOINTS //
app.post('/register', serverUserCtrl.register);
app.get('/user', serverUserCtrl.read);
app.get('/me', isAuthed, serverUserCtrl.me);
app.put('/user/:_id', isAuthed, serverUserCtrl.update);


// TABLE POPULATION ENDPOINTS
app.post('/api/feats', serverMFPopulateCtrl.addFeat);
app.post('/api/armor', serverMFPopulateCtrl.addArmor);
app.post('/api/chat', serverMFPopulateCtrl.addChat);
app.post('/api/skills', serverMFPopulateCtrl.addSkills);
app.post('/api/weapons', serverMFPopulateCtrl.addWeapons);
app.post('/api/damagingArmor', serverMFPopulateCtrl.addDamagingArmor);
app.post('/api/goodsAndServices', serverMFPopulateCtrl.addGoodsAndServices);

// CONNECTIONS //
var mongoURI = config.MONGO_URI;
var port = config.PORT;

mongoose.set('debug', true);
mongoose.connect(mongoURI);
mongoose.connection.once('open', function(){
  console.log('Connected to database');
  app.listen(port, function(){
    console.log('Server listening on port: ' + port);
  });
})
