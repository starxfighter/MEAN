var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
    title: {type: String, required:[true, 'Title needs to be present'], minlength:[4, "Has to be longer than four chracters"]},
    price: {type: String, required:[true, 'Price needs to be present']},
    url: {type: String},
}, {timestamps: true});
mongoose.model('Product', ProductSchema);