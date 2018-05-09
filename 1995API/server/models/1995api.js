var mongoose = require('mongoose');
var ApiSchema = new mongoose.Schema({
    name: {type: String, required: true}, 
}, {timestamps: true});
mongoose.model('Api', ApiSchema);