/*
* @Author: gloomyline
* @Date:   2017-02-05 11:36:50
* @Last Modified by:   Administrator
* @Last Modified time: 2017-02-07 16:55:26
*/

'use strict';

module.exports = {
	VALIDATE: {
		NAMELIMIT: '名字请限制在 1-10 个字符',
		GENDERLIMIT: '性别只能是m, f, 或 x',
		BIOLIMIT: '个人简介请限制在 1~30 个字符',
		AVATARLIMIT: '缺少头像',
		PASSWORDLIMIT: '密码至少六个字符',
		REPASSWORDERRORTIP: '两次输入的密码不一致'
	},
	OPERATE: {
		SUCCESS: '注册成功',
		NICKNAMEEXIST: '用户名已存在',
		SIGNOUTSUCCESS: '登出成功',
		NICKNAMENOTEXIST: '用户名不存在',
		PASSWORDERROR: '用户名或密码错误',
		SIGNINSUCCESS: '登录成功',
		DELETEBLOGSUCCESS: '删除文章成功'
	},
	RELEASE: {
		SUCCESS: '发表成功',
		FAILED: '发表失败',
		TITLEEMPTY: '请填写标题',
		CONTENTEMPTY: '请填写内容',
		EDITSUCCESS: '编辑成功'
	},
	REVIEW: {
		NOTEXIST: '该文章不存在',
		UNAVAILABLE: '权限不足'
	}
}