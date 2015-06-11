var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/features', function(req, res, next) {
  res.render('features');
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

module.exports = router;
