/*
* @Author: gloomyline
* @Date:   2017-01-21 14:26:25
* @Last Modified by:   gloomyline
* @Last Modified time: 2017-01-21 14:28:18
*/

'use strict';

module.exports = {
	port: 8888,
	session: {
		secret: 'myblog',
		key: 'myblog',
		maxAge: 2592000000
	},
	mongodb: 'mongodb://localhost:27017/myblog'
}