var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
    productId: {type: String, required: true, max: 100},
    status: {type: String, required: true, max: 100},
    name: {type: String, required: true, max: 100},
    surname: {type: String, required: true, max: 100},
    phone: {type: String, required: true, max: 100},
});

module.exports = mongoose.model('Order', OrderSchema);