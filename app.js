var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');


var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./services/cookieSession')(app);
require('./models/product');
require('./models/User');
require('./models/Comment');
require('./models/Order');
require('./services/passport');
require('./services/mongoConnect');

//var usersRouter = require('./routes/users');


require('./routes/googleAuth')(app);
var indexRouter = require('./routes/index');
var product = require('./routes/product'); // Imports routes for the products
var commentRouter=require('./routes/comment.route');
var order = require('./routes/Order');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/product',product);
app.use('/comment',commentRouter);
app.use('/order', order);
//app.use('/users', usersRouter);

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
