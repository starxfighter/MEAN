// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
var session = require('express-session');
var bodyParser = require('body-parser');
// invoke express and store the result in the variable app
var app = express();

const server = app.listen(8005);

var io = require('socket.io')(server);

app.use(express.static(__dirname + '/static'));
app.use(session({secret: 'codingdojo'}));
app.use(bodyParser.urlencoded({extended: true}));

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

app.get('/', function(request, response){
    response.render('index');
});

// tell the express app to listen on port 8000, always put this at the end of your server.js file
// app.listen(8000, function() {
//   console.log("listening on port 8000");
// });

io.on('connection', function(socket){
    socket.on('posting_form', function(data){
        console.log("connected")
        var temp = Math.floor(Math.random() * 1000) + 1;
        context = {
            name : data.name,
            location : data.location,
            favlang : data.favlang,
            comment : data.comment,
            luckynum : temp
        };
        console.log("context", context)
        socket.emit('result', context);
    });
});

