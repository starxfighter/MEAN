var mongoose = require('mongoose');
var NoteSchema = new mongoose.Schema({
    description: {type: String, required:[true, 'Title needs to be present'], minlength:[3, "Has to be longer than four chracters"]},
}, {timestamps: true});
mongoose.model('Note', NoteSchema);