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

mongoose.connect('mongodb://localhost/mongoose_dashboard');
var MuserSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3},
    age: {type: Number, required: true},
    favorite_food: {type: String, required: true, minlength: 10},
   }, {timestamps: true})
   mongoose.model('Muser', MuserSchema); // We are setting this Schema in our Models as 'User'
   var Muser = mongoose.model('Muser') // We are retrieving this Schema from our Models, named 'User'

// routes
app.get('/', function(req, res){
    Muser.find({}, function(err, musers){
        if(err){
            console.log("no mongooses found")
            for(var key in err.errors){
                req.flash('muser', err.errors[key].message);
                }
            res.render('index')
        }else{
            console.log("got at least one mongoose")
            // console.log('musers', musers)
            context = {
                musers : musers
            };
            res.render('index', context)
        }
    })     
});

app.get('/display/:id', function(req, res){
    console.log("passed id", req.params.id)
    Muser.find({_id: req.params.id}, function(err, muser){
        if(err){
            console.log('muser not found')
            for(var key in err.errors){
                req.flash("muser", err.errors[key].message);
            }
            res.redirect('/')
        }else{
            console.log('user found')
            context = {
                muser : muser
            };
            res.render("display", context)
        }
    })
});

app.get('/new', function(req, res){
    res.render('new');
});

app.post('/add', function(req, res){
    // console.log("Post data", req.body);
    form = req.body;
    var muser = new Muser({
        name : form.name,
        age : form.age,
        favorite_food : form.favfood,
    });
    muser.save(function(err){
        if(err){
            console.log("creation failed")
            for(var key in err.errors){
                req.flash('quote', err.errors[key].message);
                }
            res.redirect('/new')
        }else{
            console.log("successfully added the mongoose");
            res.redirect('/')
        }
    });
});

app.get('/edit/:id', function(req, res){
    console.log("passed id", req.params.id)
    Muser.find({_id: req.params.id}, function(err, muser){
        console.log("muser to update", muser)
        if(err){
            console.log('muser not found')
            for(var key in err.errors){
                req.flash("muser", err.errors[key].message);
            }
            res.redirect('/')
        }else{
            console.log('user found')
            context = {
                muser : muser
            };
            res.render("edit", context)
        }
    })
});

app.post('/update/:id', function(req, res){
    form = req.body;
    Muser.find({_id: req.params.id}, function(err, muser){
        muser[0].name = form.name;
        muser[0].age = form.age;
        muser[0].favorite_food = form.favfood;
        muser[0].save(function(err){
            if(err){
                console.log("update failed")
                for(var key in err.errors){
                    req.flash('quote', err.errors[key].message);
                    }
                res.redirect('/')
            }else{
                console.log("successfully added the mongoose");
                res.redirect('/')
            }   
        })
    })
});

app.get('/destroy/:id', function(req, res){
    form = req.body;
    Muser.remove({_id: req.params.id}, function(err){
        if(err){
            console.log("Delete failed")
            for(var key in err.errors){
                req.flash('quote', err.errors[key].message);
                }
            res.redirect('/')
        }else{
            console.log("successfully deleted the mongoose");
            res.redirect('/')
        }   
    })
});

// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
    console.log("listening on port 8000");
  });