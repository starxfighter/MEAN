var controller = require('./../controllers/controller.js');

module.exports = function(app){

    app.get('/farm', controller.farm)

    app.get('/house', controller.house)

    app.get('/cave', controller.cave)

    app.get('/casino', controller.casino)
    
};