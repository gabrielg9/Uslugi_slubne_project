var mongoose = require('mongoose');
var {Schema} = mongoose;

var userSchema = new Schema({
    username : String,
    googleId : String
});


mongoose.model('users', userSchema);