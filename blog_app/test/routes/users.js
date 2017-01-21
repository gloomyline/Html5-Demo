var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:name', (req, res, next) => {
	// res.send('hello, ' + req.params.name)
	res.render('users', {
		name: req.params.name
	})
})

module.exports = router;
