var mongoose = require('mongoose');
var AuthorSchema = new mongoose.Schema({
    name: {type: String, required:[true, 'Name needs to be present'], minlength:[3, "Has to be longer than three chracters"]},
}, {timestamps: true});
mongoose.model('Author', AuthorSchema);