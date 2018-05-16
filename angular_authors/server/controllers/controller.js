var mongoose = require('mongoose');
var Author = mongoose.model('Author');

module.exports = {

    all: function(req, res){
        Author.find({}, function(err, authors){
            if (err) {
                console.log("no author found")
                for(var key in err.errors){
                    req.flash('authors', err.errors[key].message);
                    }
                res.json({error: err})
            }else{
                console.log("authors found")
                res.json({authors:authors})
            }
        })
    },

    display: function(req, res){
        console.log('passes id', req.params.id)
        Author.find({_id: req.params.id}, function(err, author){
            if (err){
                console.log("Author not found")
                for(var key in err.errors){
                    req.flash('author', err.errors[key].message);
                    }
                res.json({error: err})
            }else{
                console.log('author found')
                res.json({authors:author})
            }
        })
    },

    new: function(req, res){
        console.log("incoming data", req.body)
        form = req.body;
        var author = new Author({
            name: form.name,
        });
        author.save(function(err){
            if(err){
                console.log('creation failed')
                for(var key in err.errors){
                    req.flash('author', err.errors[key].message);
                }
                res.json({error: err})
            }else{
                console.log("successfully created author")
                res.json({authors:author})
            }
        })
    },

    update: function(req, res){
        console.log("update data", req.body)
        form = req.body;
        Author.find({_id:req.params.id}, function(err, author){
        author[0].name = form.name;
        author[0].save(function(err){
            if(err){
                console.log('update failed')
                for(var key in err.errors){
                    req.flash('author', err.errors[key].message);
                    }
                res.json({error: err})
            }else{
                console.log('Successfully updated author')
                res.json({message: "Success"})
            }
        })
        })
    },

    delete: function(req, res){
        console.log("update data", req.body)
        form = req.body;
        Author.find({_id:req.params.id}, function(err, author){
        author[0].remove(function(err){
            if(err){
                console.log('delete failed')
                for(var key in err.errors){
                    req.flash('author', err.errors[key].message);
                    }
                res.json({error: err})
            }else{
                console.log('Successfully deleted author')
                res.json({message: "Success"})
            }
        })
        })
    }
// end of exports
}