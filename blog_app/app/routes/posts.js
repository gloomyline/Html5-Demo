/*
* @Author: gloomyline
* @Date:   2017-01-21 15:20:36
* @Last Modified by:   Administrator
* @Last Modified time: 2017-02-07 16:56:30
*/

'use strict';

var express = require('express')
var router = express.Router()
var PostModel = require('../models/posts')

var checkLogin = require('../middlewares/check').checkLogin
var releaseTip = require('../config/tips').RELEASE
var reviewTip = require('../config/tips').REVIEW
var operateTip = require('../config/tips').OPERATE

// GET /posts 所有用户或者特定用户的文章页
//   eg: GET /posts?author=xxx
router.get('/', (req, res, next) => {
	// res.send(req.flash())
	var author = req.query.author

	PostModel.getPosts(author)
		.then((posts) => {
			res.render('posts', {
				posts: posts
			})
		})
		.catch(next)

	// res.render('posts')
})

// POST /posts 发表一篇文章
router.post('/', checkLogin, (req, res, next) => {
	// res.send(req.flash())
	var author = req.session.user._id
	var title = req.fields.title
	var content = req.fields.content

	// 校验参数
	try {
		if (!title.length){
			throw new Error(releaseTip.TITLEEMPTY)
		}
		if (!content.length){
			throw new Error(releaseTip.CONTENTEMPTY)
		}
	}
	catch(e) {
		req.flash('error', e.message)
		return res.redirect('back')
	}

	var post = {
		author: author,
		title: title,
		content: content,
		pv: 0
	}

	PostModel.create(post)
		.then((result) => {
			// 这里的 post 是插入 mongodb 后的值，包含_id
			post = result.ops[0]
			req.flash('success', realeaseTip.SUCCESS)

			// 发表成功后跳转到文章首页
			res.redirect(`/posts/${post._id}`)
			// res.redirect('/posts')
		})
		.catch(next)
})

// GET /posts/create 发表文章页
router.get('/create', checkLogin, (req, res, next) => {
	// res.send(req.flash())
	res.render('create')
})

// GET /posts/:postId 单独一篇文章页
router.get('/:postId', (req,res,next) => {
	// res.send(req.flash())
	var postId = req.params.postId
	Promise.all([
		PostModel.getPostById(postId),	// 获取文章信息
		PostModel.incPv(postId)			// pv 加 1
	])
	.then((result) => {
		var post = result[0]
		if (!!!post) {
			throw new Error(reviewTip.NOTEXIST)
		}

		res.render('post', {
			post: post
		})
	})
	.catch(next)
})

// GET /posts/:postId/edit 更新文章页
router.get('/:postId/edit', checkLogin, (req, res, next) => {
	// res.send(req.flash())
	var postId = req.params.postId
	var author = req.session.user._id

	PostModel.getRawPostById(postId)
		.then((post) => {
			if (!!!post) {
				throw new Error(reviewTip.NOTEXIST)
			}
			if (author.toString() !== post.author._id.toString()) {
				throw new Error(reviewTip.UNAVAILABLE)
			}
			res.render('edit', {post: post})
		})
		.catch(next)
})

// POST /posts/:postId/edit 更新一篇文章
router.post('/:postId/edit', checkLogin, (req, res, next) => {
	// res.send(req.flash())
	var postId = req.params.postId
	var author = req.params.session.user_id
	var title = req.fields.title
	var content = req.fields.content

	PostModel.updatePostById(postId, author, {title: title, content: content})
		.then(() => {
			req.flash('success', releaseTip.EDITSUCCESS)
			res.redirect(`/posts/${postId}`)
		})
		.catch(next)
})

// POST /posts/:postId/remove 删除一篇文章
router.post('/:postId/remove', checkLogin, (req, res, next) => {
	// res.send(req.flash())
	var postId = req.params.postId
	var author = req.session.user._id

	PostModel.delPostById(postId, author)
		.then(() => {
			req.flash('success', operateTip.DELETEBLOGSUCCESS)
			res.redirect('/posts')
		})
		.catch(next)
})

// POST /posts/:postId/comment 创建一条留言
router.post('/:postId/comment', checkLogin, (req, res, next) => {
	res.send(req.flash())
})

// POST /posts/:postId/:commentId/remove 删除一条留言
router.post('/:postId/comment/:commentId/remove', checkLogin, (req, res, next) => {
	res.send(req.flash())
}) 

module.exports = router