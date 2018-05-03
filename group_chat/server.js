var express = require("express");
var session = require('express-session');
var bodyParser = require('body-parser');

var app = express();

const server = app.listen(8005);

var io = require('socket.io')(server);

var messages = [];

app.use(express.static(__dirname + '/static'));
app.use(session({secret: 'codingdojo'}));
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response){
    response.render('index');
});

io.on('connection', function(socket){
    console.log('messages', messages);
    console.log("connection established");
    context = {
        messages : messages,
    };
    socket.emit('post_msg_all', context);

    socket.on('enter_msg', function(data){
        console.log("got message", data);
        var mess = data.person + " : " + data.msg;
        var temp = messages;
        temp.push(mess);
        messages = temp;
        console.log('server messages', messages);
        context ={
            message : mess,
        };
        io.emit('post_msg', context);
    });
});