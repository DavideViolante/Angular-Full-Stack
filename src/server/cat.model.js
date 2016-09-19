var mongoose = require('mongoose');

var catSchema = mongoose.Schema({
    name: String,
    weight: Number,
    age: Number
});

var Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;