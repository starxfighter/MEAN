// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
var session = require('express-session');

// invoke express and store the result in the variable app
var app = express();

app.use(express.static(__dirname + '/static'));
app.use(session({secret: 'codingdojo'}));

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

app.get('/', function(request, response){
    sess = request.session;
    sess.counter = 0;
    context = {
        'counter' : sess.counter,
    };
    response.render('index', context);
});

app.post('/count', function(request, response){
    sess = request.session;
    sess.counter += 1;
    context={
        'counter' : sess.counter,
    };
    response.render('index', context);
});

app.post('/ninja1', function(request, response){
    sess = request.session;
    sess.counter += 2;
    context = {
        'counter' : sess.counter,
    };
    response.render('index', context);
});

app.post('/ninja2', function(request, response){
    sess = request.session;
    sess.counter = 0;
    context = {
        'counter' : sess.counter,
    };
    response.render('index', context);
});

// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
  console.log("listening on port 8000");
})








// def index():
//     session['count'] = 0
//     return render_template("index.html")

// @app.route('/response', methods=['post'])
// def response():
//     session['count'] = session['count'] + 1
//     return redirect('/show')

// @app.route('/win', methods=['post'])
// def win():
//     session['count'] = session['count'] + 2
//     return redirect('/show')

// @app.route('/show')
// def show():
//     return render_template('index.html')
