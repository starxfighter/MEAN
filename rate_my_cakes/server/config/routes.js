var mongoose = require('mongoose');
var Task = mongoose.model('Cake');

var controller = require('./../controllers/controller.js');

module.exports = function(app){

    app.get('/all', controller.all)

    app.get('/:id', controller.display)

    app.post('/new', controller.new)

    app.put('/update/:id', controller.update)
  
};