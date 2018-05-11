const mongoose = require('mongoose');

var scoreSchema = new mongoose.Schema({
    score: {type: Number, require: true, default: 0},
}, {timestamps: true});

module.exports = mongoose.model('scores', scoreSchema);