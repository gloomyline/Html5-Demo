/*
* @Author: gloomyline
* @Date:   2017-01-21 15:37:22
* @Last Modified by:   gloomyline
* @Last Modified time: 2017-02-05 14:26:27
*/

'use strict';

var sha1 = require('sha1')
var express = require('express')
var router = express.Router()

var UserModel = require('../models/users')
var checkNotLogin = require('../middlewares/check').checkNotLogin;
var operateTip = require('../config/tips').OPERATE

// GET /signin 登录页
router.get('/', checkNotLogin, (req, res, next) => {
	// res.send(req.flash())
	res.render('signin')
})

// POST /signin 用户登录
router.post('/', checkNotLogin, (req, res, next) => {
	var name = req.fields.name
	var password = req.fields.password

	UserModel.getUserByName(name)
		.then(function(user) {
			if (!user){
				req.flash('error', operateTip.NICKNAMENOTEXIST)
				return res.redirect('back')
			}
			// checkout password is matched
			if (sha1(password) !== user.password) {
				req.flash('error', operateTip.PASSWORDERROR)
				return res.redirect('back')
			}
			req.flash('success', operateTip.SIGNINSUCCESS)
			// write userdata into session
			delete user.password
			req.session.user = user
			// return back to home page
			res.redirect('/posts')
		})
		.catch(next)
})

module.exports = router