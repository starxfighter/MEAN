// var mongoose = require('mongoose');
// var Task = mongoose.model('Task');
var path = require('path');
// var controller = require('./../controllers/tasks.js');

module.exports = function(app){

    // app.get('/all', controller.all)

    // app.get('/:id', controller.display)

    // app.post('/new', controller.new)

    // app.put('/update/:id', controller.update)

    // app.delete('/delete/:id', controller.destroy)

    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
    
};