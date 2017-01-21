var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));	// 设置存放模板文件的目录
app.set('view engine', 'ejs');						// 设置模板引擎为 ejs

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// error handle
app.use('/', (err, req, res, next) => {
	console.error(err.stack)
	res.status(500).send('Something Broken!')
})

app.listen(8888, (res, req) => {
	console.log('The server is running')
})

// module.exports = app;
