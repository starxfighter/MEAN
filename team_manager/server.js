var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var flash = require('express-flash');

var app = express();

app.use(express.static(__dirname + '/public/dist/public'));
app.use(session({secret: 'codingdojo'}));
app.use(bodyParser.json());
app.use(flash());

app.set('views', __dirname + '/client/views');

require('./server/config/mongoose.js')

require('./server/config/routes.js')(app)

app.listen(8000, function(){
    console.log("Listening on port 8000")
});