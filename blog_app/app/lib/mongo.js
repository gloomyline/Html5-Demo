/*
* @Author: gloomyline
* @Date:   2017-01-21 16:54:19
* @Last Modified by:   gloomyline
* @Last Modified time: 2017-01-21 17:24:09
*/

'use strict';

var config = require('config-lite')
var Mongolass = require('mongolass')
var mongolass = new Mongolass()
mongolass.connect(config.mongodb)

exports.User = mongolass.model('User', {
	name: {type: 'string'},
	password: {type: 'string'},
	avatar: {type: 'string'},
	gender: {type: 'string', enum: ['m', 'f', 'x']},
	bio: {type: 'string'}
})

// 根据用户名找到用户，用户名全局唯一
exports.User.index({name: 1}, {unique:true}).exec();