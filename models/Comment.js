var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    userId: {type:String, required:true},
    postedDate : {type: Date, default: Date.now},
    body : String
});
module.exports = mongoose.model('Comment', commentSchema);