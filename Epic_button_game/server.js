var express = require("express");
var session = require('express-session');
var bodyParser = require('body-parser');

var app = express();

const server = app.listen(8005);

var io = require('socket.io')(server);

var counter = 0;

app.use(express.static(__dirname + '/static'));
app.use(session({secret: 'codingdojo'}));
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response){
    console.log('refresh counter', counter);
    response.render('index', context);
});

io.on('connection', function(socket){
    console.log("inital emit")
    context={
        counter: counter,
    }
    socket.emit('result', context);

    socket.on('counting', function(data){
        console.log("connected counting");
        counter += 1;
        context = {
            counter: counter,
        };
        // socket.emit('result', context);
        io.emit('result', context);
    });
    socket.on('reset', function(data){
        console.log("reset requested");
        counter = 0;
        context = {
            counter : counter,
        };
        // socket.emit('zero', context);
        io.emit('zero', context);
    });
});