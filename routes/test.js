var express = require('express');
var User = require('../models').User
var router = express.Router();

/* GET test page. */
router.get('/', function(req, res, next) {
  var personEntity = new User({email:'Krouky'});
  //打印这个实体的名字看看
  console.log(personEntity.email); //Krouky   
  personEntity.save();  //执行完成后，数据库就有该数据了

  res.render('test', { title: personEntity.email});
});

module.exports = router;
