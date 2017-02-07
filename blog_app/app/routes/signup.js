/*
* @Author: gloomyline
* @Date:   2017-01-21 15:41:04
* @Last Modified by:   gloomyline
* @Last Modified time: 2017-02-05 13:58:42
*/

'use strict';

var fs = require('fs')
var path = require('path')
var sha1 = require('sha1')

var express = require('express')
var router = express.Router()

var UserModel = require('../models/users')
var checkNotLogin = require('../middlewares/check').checkNotLogin
var validateTip = require('../config/tips').VALIDATE
var operateTip = require('../config/tips').OPERATE

// GET /signup 注册页
router.get('/', checkNotLogin, (req, res, next) => {
	// res.send(req.flash())
	res.render('signup')
})

// POST /signup 用户注册
router.post('/', checkNotLogin, (req, res, next) => {
	var name = req.fields.name
	var gender = req.fields.gender
	var bio = req.fields.bio
	var avatar = req.files.avatar.path.split(path.sep).pop()
	var password = req.fields.password
	var repassword = req.fields.repassword

	// validate arguments
	try{
		if (!(name.length >=1 && name.length <= 10)) {
			throw new Error(validateTip.NAMELIMIT)
		}
		if (['m', 'f', 'x'].indexOf(gender) === -1){
			throw new Error(validateTip.GENDERLIMIT)
		}
		if (!(bio.length >=1 && bio.length <= 30)) {
			throw new Error(validateTip.BIOLIMIT)
		}
		if (!req.files.avatar.name) {
			throw new Error(validateTip.AVATARLIMIT)
		}
		if (password.length < 6) {
			throw new Error(validateTip.PASSWORDLIMIT)
		}
		if (password != repassword) {
			throw new Error(validateTip.REPASSWORDERRORTIP)
		}
	}
	catch(e) {
		// signup failed, delete the uploaded avatar asynchronously 
		fs.unlink(req.files.avatar.path)
		req.flash('error', e.message)
		return res.redirect('/signup')
	}

	// password-encryption
	password = sha1(password)

	// datas which are waiting for writing into db
	var user = {
		name: name,
		password: password,
		gender: gender,
		bio: bio,
		avatar: avatar
	}

	// userdata writed into db
	UserModel.create(user)
		.then(function(result) {
			// 此 user 是插入 mongodb 后的值,包含 _id
			user = result.ops[0]
			// 将用户信息存入 session
			delete user.password
			req.session.user = user
			// 写入flash
			req.flash('success', operateTip.SUCCESS)
			// return back to home page
			res.redirect('/posts')
		})
		.catch(function (e) {
			// 注册失败，异步删除上传的 avatar
			fs.unlink(req.files.avatar.path)
			// 用户名被占用则跳回注册页
			if (e.message.match('E11000 duplicate key')) {
				req.flash('error', operateTip.NICKNAMEEXIST)
				return res.redirect('/signup')
			}
			next(e)
		})
})

module.exports = router