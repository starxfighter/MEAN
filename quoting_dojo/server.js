// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
var session = require('express-session');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const flash = require('express-flash');

// invoke express and store the result in the variable app
var app = express();

app.use(express.static(__dirname + '/static'));
app.use(session({secret: 'codingdojo'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(flash());

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/quoting_dojo');
var QuoteSchema = new mongoose.Schema({
    quote: {type: String, required: true, minlength: 10},
    name: {type: String, required: true, minlength: 10},
   }, {timestamps: true})
   mongoose.model('Quote', QuoteSchema); // We are setting this Schema in our Models as 'User'
   var Quote = mongoose.model('Quote') // We are retrieving this Schema from our Models, named 'User'

app.get('/', function(request, response){
    response.render('index');
});

// Add User Request 
app.post('/quotes', function(req, res) {
    console.log("POST DATA", req.body);
    form = req.body;
    var quote = new Quote({
        quote : form.quote, 
        name: form.name,
    });
    console.log("post user", quote)
    // This is where we would add the user from req.body to the database.
    quote.save(function(err) {
        // if there is an error console.log that something went wrong!
        if(err) {
            console.log('something went wrong');
            for(var key in err.errors){
                req.flash('quote', err.errors[key].message);
                }
            res.redirect('/')
        } else { // else console.log that we did well and then redirect to the root route
            console.log('successfully added a quote!');
        res.redirect('/');
        }
      })
})

app.get('/skip', function(req, res) {
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    Quote.find({}, function(err, quotes){
        if(err){
            console.log("no quote found")
            for(var key in err.errors){
                req.flash('quote', err.errors[key].message);
                }
            res.render('quotes')
        }else{
            console.log("got at least one quote")
            console.log('quotes', quotes)
            context = {
                quotes : quotes
            };
            res.render('quotes', context)
        }
    })
})

// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
  console.log("listening on port 8000");
});