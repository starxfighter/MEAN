var mongoose = require('mongoose');
var Api = mongoose.model('Api');

var controller = require('./../controllers/1995apis.js');

module.exports = function(app){
    
    app.get('/', controller.all)

    app.get('/new/:name/', controller.newperson)

    app.get('/remove/:name/', controller.destroy)

    app.get('/:name', controller.display)
    
};