var mongoose = require('mongoose')
var Muser = mongoose.model('Muser') // We are retrieving this Schema from our Models, named 'User'

var controller = require('./../controllers/mongoosedbs.js')

// routes
module.exports = function(app){
    app.get('/', controller.index)

    app.get('/display/:id', controller.displayone)

    app.get('/new', controller.new)

    app.post('/add', controller.add)

    app.get('/edit/:id', controller.editone) 

    app.post('/update/:id', controller.updateone)

    app.get('/destroy/:id', controller.destroyone)

// end of exports
}