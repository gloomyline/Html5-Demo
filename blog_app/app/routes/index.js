/*
* @Author: gloomyline
* @Date:   2017-01-21 15:17:40
* @Last Modified by:   gloomyline
* @Last Modified time: 2017-01-21 16:01:49
*/

'use strict';

module.exports = function (app) {
	app.get('/', (req, res) => {
		res.redirect('/posts')
	})
	app.use('/signup', require('./signup'))
	app.use('/signin', require('./signin'))
	app.use('/signout', require('./signout'))
	app.use('/posts', require('./posts'))
}