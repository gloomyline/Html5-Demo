/*
* @Author: gloomyline
* @Date:   2017-01-21 15:12:13
* @Last Modified by:   gloomyline
* @Last Modified time: 2017-01-21 15:17:05
*/

'use strict';

module.exports = {
	checkLogin: function checkLogin(req, res, next) {
		if (!req.session.user) {
			req.flash('error', 'not logined')
			return res.redirect('/signin')
		}
		next()
	},
	checkNotLogin: function checkNotLogin(req, res, next) {
		if (req.session.user){
			req.flash('error', 'logined yet')
			return res.redirect('back') //返回之前的页面
		}
		next()
	}
}