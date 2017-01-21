/*
* @Author: gloomyline
* @Date:   2017-01-21 15:41:04
* @Last Modified by:   gloomyline
* @Last Modified time: 2017-01-21 17:27:04
*/

'use strict';

var express = require('express')
var router = express.Router()

var checkNotLogin = require('../middlewares/check').checkNotLogin

// GET /signup 注册页
router.get('/', checkNotLogin, (req, res, next) => {
	// res.send(req.flash())
	res.render('signup')
})

// POST /signup 用户注册
router.post('/', checkNotLogin, (req, res, next) => {
	res.send(req.flash())
})

module.exports = router