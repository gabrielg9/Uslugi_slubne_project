var mongoose = require('mongoose');
var config = require('../config/config');

mongoose.connect(config.mongoURI, { useNewUrlParser: true });

var mongoConnection = mongoose.connection;

mongoConnection.on('error', function(){
    throw new Error("Cannot connect to the database!")
});
mongoConnection.once('open', function() {
    console.log("Connected to the database!")
});