var mongoose = require('mongoose');
var CakeSchema = new mongoose.Schema({
    name: {type: String},
    url: {type: String, default: " "},
    ratings: [
        {stars: {type: Number},
        comment: {type: String}
    }
    ],
}, {timestamps: true});
mongoose.model('Cake', CakeSchema);