// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
var session = require('express-session');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// invoke express and store the result in the variable app
var app = express();

app.use(express.static(__dirname + '/static'));
app.use(session({secret: 'codingdojo'}));
app.use(bodyParser.urlencoded({extended: true}));

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/basic_mongoose');
var UserSchema = new mongoose.Schema({
    name: String,
    age: Number
   })
   mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
   var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'
// app.get('/', function(request, response){
//     response.render('index');
// });

// app.post('/process', function(request, response){
//     form = request.body;
//     context={
//         'name' : form.name,
//         'location' : form.location,
//         'favlang' : form.favlang,
//         'comment' : form.comment,
//     };
//     response.render('results', context);
// });

app.get('/', function(req, res) {
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    User.find({}, function(err, users){
        if(err){
            console.log("no users found")
        }else{
            console.log("got at least one user")
            console.log('users', users)
            context = {
                users : users
            };
            res.render('index', context)
        }
    })
    
    // res.render('index');
})
// Add User Request 
app.post('/users', function(req, res) {
    console.log("POST DATA", req.body);
    form = req.body;
    var user = new User({name : form.name, age: form.age});
    console.log("post user", user)
    // This is where we would add the user from req.body to the database.
    user.save(function(err) {
        // if there is an error console.log that something went wrong!
        if(err) {
          console.log('something went wrong');
        } else { // else console.log that we did well and then redirect to the root route
          console.log('successfully added a user!');
          res.redirect('/');
        }
      })
    // res.redirect('/');
})

// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
  console.log("listening on port 8000");
});