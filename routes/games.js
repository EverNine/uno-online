var express = require('express');
var router = express.Router();
var Game = require('../models').Game
var seq = 0;

/* GET game page. */
router.get('/', function(req, res, next) {
  res.render('games');
});

router.get('/create', function(req, res, next) {
  game = new Game({ seq: seq, player: 1 });
  seq += 1;
  game.save();
  req.session.game_id = game.seq;
  console.log(game.seq);
  res.redirect('/games');
});

router.get('/join/:id', function(req, res, next) {
  query = Game.findOne({ seq: req.params.id });
  query.exec(function (err, game) {
    if (game != null){
      game.player += 1;
      game.save();
      req.session.game_id = game.seq;
      res.redirect('/games');
    }
  });
});

module.exports = router;
