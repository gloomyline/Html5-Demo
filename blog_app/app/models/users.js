/*
* @Author: gloomyline
* @Date:   2017-02-05 11:25:06
* @Last Modified by:   gloomyline
* @Last Modified time: 2017-02-05 14:11:27
*/

'use strict';

var User = require('../lib/mongo').User

module.exports = {
	// signup an user
	create: function create(user) {
		return User.create(user).exec()
	},
	// get userdata by the nickname of an user
	getUserByName: function getUserByName(name) {
		return User
			.findOne({name: name})
			.addCreatedAt()	// 自定义插件(通过 _id 生成时间戳)
			.exec()
	}
}