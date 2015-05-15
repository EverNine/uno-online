var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');    //引用mongoose模块

/* GET test page. */
router.get('/', function(req, res, next) {
  var db = mongoose.createConnection('localhost','test'); //创建一个数据库连接
  db.on('error',console.error.bind(console,'连接错误:'));
  var PersonSchema = new mongoose.Schema({
    name:String   //定义一个属性name，类型为String
  });
  var PersonModel = db.model('Person',PersonSchema);
  //如果该Model已经发布，则可以直接通过名字索引到，如下：
  //如果没有发布，上一段代码将会异常
  var personEntity = new PersonModel({name:'Krouky'});
  //打印这个实体的名字看看
  console.log(personEntity.name); //Krouky   
  personEntity.save();  //执行完成后，数据库就有该数据了

  res.render('test', { title: personEntity.name});
});

module.exports = router;
