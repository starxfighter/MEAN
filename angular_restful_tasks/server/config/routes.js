var mongoose = require('mongoose');
var Task = mongoose.model('Task');

var controller = require('./../controllers/tasks.js');

module.exports = function(app){

    app.get('/all', controller.all)

    app.get('/:id', controller.display)

    app.post('/new', controller.new)

    app.put('/update/:id', controller.update)

    app.delete('/delete/:id', controller.destroy)
    
};