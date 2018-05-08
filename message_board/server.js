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
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/dashboard');
var MessageSchema = new mongoose.Schema({
    name : {type: String, required: true, minlength: 3},
    message : {type: String, required: true, minlength: 10},
    comments : [{type: Schema.Types.ObjectId, ref: "Comment"}]
});

var CommentSchema = new mongoose.Schema({
    cname : {type: String, required: true, minlength: 3},
    comment : {type: String, required: true, minlength: 3},
    message : {type: Schema.Types.ObjectId, ref: "Message"}
});

mongoose.model("Message", MessageSchema);
var Message = mongoose.model("Message");
mongoose.model("Comment", CommentSchema);
var Comment = mongoose.model("Comment");

// routes
app.get('/', function(req, res){
    Message.find({}).populate('comments').exec(function(err, msg){
        if(err){
            console.log("no messages found")
            for(var key in err.errors){
                req.flash('msg', err.errors[key].message);
                }
            res.render('index')
        }else{
            console.log("got at least one message")
            context = {
                dmessages : msg,
            };
            res.render('index', context)
        }
    })     
});

app.post('/addmsg', function(req, res){
    form = req.body;
    var msg = new Message({
        name : form.name,
        message : form.message,
    });
    msg.save(function(err){
        if(err){
            console.log("creation failed")
            for(var key in err.errors){
                req.flash('quote', err.errors[key].message);
            }   
            res.redirect('/')
        }else{
            console.log("successfully added message")
            res.redirect('/')
        }
    })
});

app.post('/addcmt/:id', function(req, res){
    form = req.body;
    var comment = new Comment({
        cname : form.cname,
        comment : form.comment,
        message : req.params.id,
    });
    comment.save(function(err){
        if(err){
            console.log("creation failed")
            for(var key in err.errors){
                req.flash('comment', err.errors[key].message);
                }
            res.redirect('/')
        }else{
            console.log("successfully added the comment");
            Message.find({_id: req.params.id}, function(err, msg){
                if(err){
                    console.log("big Error!!")
                    for(var key in err.errors){
                        req.flash("muser", err.errors[key].message);
                    }
                    res.direct('/')
                }else{
                    msg[0].comments.push(comment._id)
                    msg[0].save(function(err){
                        if(err){
                            console.log('array push failed')
                        }else{
                            console.log('array push good')
                        }
                    })
                }
            })
            res.redirect('/')
        }
    });
});

// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
    console.log("listening on port 8000");
  });