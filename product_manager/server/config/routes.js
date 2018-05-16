var mongoose = require('mongoose');
var Product = mongoose.model('Product');

var controller = require('./../controllers/controller.js');

module.exports = function(app){

    app.get('/all', controller.all)

    app.get('/:id', controller.display)

    app.post('/new', controller.new)

    app.put('/update/:id', controller.update)

    app.delete('/delete/:id', controller.delete)
  
};