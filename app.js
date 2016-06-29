
/**
 * Module dependencies.
 */

var express = require('express')
  , session = require('express-session')
  , routes = require('./routes')
  , user = require('./routes/user')
  , control = require('./routes/controllers')
  , mongoose = require('mongoose')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(session({secret: 'ssshhhhh'}));
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.post('/login', control.login);
app.get('/users', user.list);
app.get('/signuppage', control.signuppage);
app.post('/signup',control.signup);
app.post('/logout',control.logout);
app.post('/reservate',control.reservate);
app.post('/reservecancel',control.reservecancel);
app.post('/reservesrch', control.reservesrch);
app.post('/reserveupd', control.reserveupd);

require('./dbconn.js').connect();

/*var io = require('socket.io').listen(3300);

io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});*/

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
