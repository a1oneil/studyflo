var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dash', { title: 'Studyflo | Welcome to your flo' });
});

module.exports = router;