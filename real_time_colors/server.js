var express = require("express");
var session = require('express-session');
var bodyParser = require('body-parser');

var app = express();

const server = app.listen(8005);

var io = require('socket.io')(server);

var scolor = 'white';

app.use(express.static(__dirname + '/static'));
app.use(session({secret: 'codingdojo'}));
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response){
    // console.log('refresh counter', counter);
    context = {
        color : scolor,
    }
    response.render('index', context);
});

io.on('connection', function(socket){
    console.log("connection established")
    if(scolor === 'green'){
        context = {
            color : 'green',
        };
        socket.emit('rtngreen', context);
    } else if(scolor === 'blue'){
        context = {
            color : 'blue',
        };
        socket.emit('rtnblue', context);    
    }else{
        context = {
            color : 'pink',
        };
        socket.emit('rtnpink', context);  
    }

    socket.on('grncolor', function(data){
        console.log("got green request");
        scolor = 'green';
        context = {
            color : 'green',
        };
        io.emit('rtngreen', context);
    });

    socket.on('blecolor', function(data){
        console.log("got blue request");
        scolor = 'blue';
        context = {
            color : 'blue',
        };
        io.emit('rtnblue', context);
    });

    socket.on('pnkcolor', function(data){
        console.log("got pink request");
        scolor = 'pink';
        context = {
            color : 'pink',
        };
        io.emit('rtnpink', context);
    });
});