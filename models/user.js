var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  email: { type: String},
  pass: { type: String },
});

UserSchema.index({email: 1}, {unique: true});

mongoose.model('User', UserSchema);
