/*
* @Author: gloomyline
* @Date:   2017-01-21 15:44:08
* @Last Modified by:   gloomyline
* @Last Modified time: 2017-01-21 16:29:39
*/

'use strict';

var express = require('express')
var router = express.Router()

var checkLogin = require('../middlewares/check').checkLogin

// GET /signout 登出
router.get('/', checkLogin, (req, res, next) => {
	res.send(req.flash())
})

module.exports = router