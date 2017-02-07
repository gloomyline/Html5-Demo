/*
* @Author: gloomyline
* @Date:   2017-01-21 15:44:08
* @Last Modified by:   gloomyline
* @Last Modified time: 2017-02-06 17:23:48
*/

'use strict';

var express = require('express')
var router = express.Router()

var checkLogin = require('../middlewares/check').checkLogin
var operateTip = require('../config/tips').OPERATE

// GET /signout 登出
router.get('/', checkLogin, (req, res, next) => {
	// clear userdata of session
	req.session.user = null
	req.flash('success', operateTip.SIGNOUTSUCCESS)
	// return back to home page
	res.redirect('/posts')
	// res.send(req.flash())
})

module.exports = router