var mongoose = require('mongoose');
var MuserSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3},
    age: {type: Number, required: true},
    favorite_food: {type: String, required: true, minlength: 10},
   }, {timestamps: true})
   mongoose.model('Muser', MuserSchema); // We are setting this Schema in our Models as 'User'
 