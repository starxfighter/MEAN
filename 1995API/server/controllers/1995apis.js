var mongoose = require('mongoose');
var Api = mongoose.model("Api");

module.exports = {

    all: function(req, res){
        Api.find({}, function(err, people){
            if(err){
                console.log("no people found")
                for(var key in err.errors){
                    req.flash('api', err.errors[key].message);
                    }
                res.json({error: err})
            }else{
                console.log("got at least one person")
                res.json({people:people})
            }
        })
    },

    newperson: function(req, res){
        console.log('passed name', req.params.name)
        var person = new Api({
            name: req.params.name,
        });
        person.save(function(err){
            if(err){
                console.log("creation failed")
                for(var key in err.errors){
                    req.flash('quote', err.errors[key].message);
                    }
                    res.json({error: err})   
            }else{
                console.log("successfully created person")
                res.json({people: person})
            }
        })
    },

    display: function(req, res){
        console.log("passed name", req.params.name)
        Api.find({name: req.params.name}, function(err, person){
            if(err){
                console.log("person not found")
                for(var key in err.errors){
                    req.flash('api', err.errors[key].message);
                    }
                res.json({error: err})
            }else{
                console.log("person found")
                res.json({people:person})
            }
        })
    },

    destroy: function(req, res){
        Api.remove({name: req.params.name}, function(err){
            if(err){
                console.log("Delete failed")
                for(var key in err.errors){
                    req.flash('api', err.errors[key].message);
                    }
                    res.json({error: err})   
            }else{
                console.log("successfully deleted person")
                res.json({message: "Success"})
            }
        })
    }
// end of exports
}