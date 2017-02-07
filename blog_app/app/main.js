/*
* @Author: Administrator
* @Date:   2017-01-21 13:35:50
* @Last Modified by:   gloomyline
* @Last Modified time: 2017-02-05 11:25:29
*/

'use strict';

var path = require('path')
var express = require('express')
var session = require('express-session')
var MongoStore = require('connect-mongo')(session)
var flash = require('connect-flash')
var config = require('config-lite')
var routes = require('./routes')
var pkg = require('./package')

var app = express()

// engine template setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// set static directory
app.use(express.static(path.join(__dirname, 'public')))

// session middleware
app.use(session({
	name: config.session.key, 			// 设置 cookie 中保存 session id 的字段名称
	secret: config.session.secret, 		// 通过设置 secret 来计算 hash 值并存放在 cookie 中，使产生的 signedCookie 防篡改
	cookie: {
		maxAge: config.session.maxAge	// 过期时间，过期后 cookie 中的 session id 自动删除 
	},
	store: new MongoStore({				// 将 session 存储到 mongodb
		url: config.mongodb 			// mongodb 地址
	})
}))

// flash middleware to display notices
app.use(flash())

// middleware for handling the form and uploaded files
app.use(require('express-formidable')({
	uploadDir: path.join(__dirname, 'public/img'), //directory for uploading
	keepExtensions: true 						   //remain the extensions of files
}))

// set global constant of template
app.locals.blog = {
	title: pkg.name,
	description: pkg.description
}

// add needed variables of template
app.use((req, res, next) => {
	res.locals.user = req.session.user
	res.locals.success = req.flash('success').toString()
	res.locals.error = req.flash('error').toString()
	next()
})

// routes
routes(app)

// listen port start program
app.listen(config.port, function () {
	console.log(`${pkg.name} listening on port ${config.port}`)
})