var mongoose = require('mongoose');
var PlayerSchema = new mongoose.Schema({
    name: {type: String, required:[true, 'Name needs to be present'], minlength:[2, "Has to be longer than two chracters"]},
    position: {type: String},
    game1status: {type: String, default: 'Undecided'},
    game2status: {type: String, default: 'Undecided'},
    game3status: {type: String ,default: 'Undecided'},
}, {timestamps: true});
mongoose.model('Player', PlayerSchema);