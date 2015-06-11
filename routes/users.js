var express = require('express');
var router = express.Router();
var User = require('../models').User

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(req.session.user_id);
});

router.get('/signin',function(req, res, next) {
  res.render('signin');
});

router.get('/signup',function(req, res, next) {
  res.render('signup');
});

router.post('/signin', function(req, res, next) {
  query = User.findOne({email: req.body.email});
  query.exec(function (err, user) {
    if (user == null)
      res.render('signin');
    else{
      req.session.user_id = user.id;
      res.render('index', {title: "aaaa"});
    }
  });
});

router.post('/signup', function(req, res, next) {
  query = User.findOne({email: req.body.email});
  query.exec(function (err, user) {
    if (user != null)
      res.render('signup');
    else{
      user = new User(req.body);
      user.save();
      req.session.user_id = user.id;
      res.render('index', {title: "aaaa"});
    }
  });
});

module.exports = router;
