var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//passport 
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var db = require('./db');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//var indexRouter = require('./db/index');
//var usersRouter = require('./db/users.js');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
  });
  module.exports = app;

  //initialize passport and restore authentication state
  app.use(passport.initialize());
  app.use(passport.session());

  //defined routes 
  app.get('/', //not sure if this is the main page - after login 
    function(req, res){
      res.render('home', {user: req.user});
    });

    app.post('/login',
      function(req, res){
        res.render('login');
      });

  app.get('/login',
    passport.authenticate('local', {failureRedirect: '/login'}),
      function(req, res){
      res.redirect('/');
    });

    app.get('/profile',
      require('connect-ensure-login').ensureLoggedIn(),
      function(req, res){
        res.render('profile', {user: req.user});
      });
    
    

  //Configure the local strategy for use by Passport
  passport.use(new Strategy(
    function(username, password, cb){
      db.users.findByUsername(username, function(err, user){
        if (err){return cb(err);}
        if (!user) { return cb(null, false); }
        if (user.passwrod != password) {return cb(null, false);}
        return cb(null, user);
      });
    }));
  
  //configure passport authenticated session persistence
  passport.serializeUser(function(user, cb){
    cb(null, user.id);
  });
 
  passport.deserializeUser(function(id, cb){
    db.users.findById(id, function(err, user){
      if(err) { return cb(err); }
      cb(null, user);
    });
  });

  app.listen(3001);

