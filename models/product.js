var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true)

var ProductSchema = new Schema({
    name: {type: String, required: true, max: 100},
    price: {type: Number, required: true},
    type: {type: String, required: true, max: 100},
});


ProductSchema.index({name: 'text'});
// Export the model
module.exports = mongoose.model('Product', ProductSchema);