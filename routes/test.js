var express = require('express');
var User = require('../models').User
var router = express.Router();

/* GET test page. */
router.get('/', function(req, res, next) {
  //var personEntity = new User({email:'Krouky'});
  ////打印这个实体的名字看看
  //console.log(personEntity.email); //Krouky   
  //personEntity.save();  //执行完成后，数据库就有该数据了
  //req.session.email = personEntity.email;
  res.cookie('cookiename','i am a cookie',{ maxAge: 20000,httpOnly:true, path:'/'});//cooike 时长 30 sec

  res.render('test', { title: req.cookies.cookiename});
});

module.exports = router;
