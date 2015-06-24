var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GameSchema = new Schema({
  seq: Number,
  cards: [Number],
  players: Number
});

mongoose.model('Game', GameSchema);
