var mongoose = require('mongoose');
var Cake = mongoose.model('Cake');

module.exports = {

    all: function(req, res){
        Cake.find({}, function(err, cakes){
            if (err) {
                console.log("no tasks found")
                for(var key in err.errors){
                    req.flash('cake', err.errors[key].message);
                    }
                res.json({error: err})
            }else{
                console.log("cakes found")
                res.json({cakes:cakes})
            }
        })
    },

    display: function(req, res){
        console.log('passes id', req.params.id)
        Cake.find({_id: req.params.id}, function(err, cake){
            if (err){
                console.log("cake not found")
                for(var key in err.errors){
                    req.flash('cake', err.errors[key].message);
                    }
                res.json({error: err})
            }else{
                console.log('cake found')
                res.json({cakes:cake})
            }
        })
    },

    new: function(req, res){
        console.log("incoming data", req.body)
        form = req.body;
        var cake = new Cake({
            name: form.name,
            url: form.url
        });
        cake.save(function(err){
            if(err){
                console.log('creation failed')
                for(var key in err.errors){
                    req.flash('cake', err.errors[key].message);
                }
                res.json({error: err})
            }else{
                console.log("successfully created cake")
                res.json({cakes:cake})
            }
        })
    },

    update: function(req, res){
        console.log("update data", req.body)
        form = req.body;
        Cake.find({_id:req.params.id}, function(err, cake){
        cake[0].ratings.push({
            stars: form.stars,
            comment: form.comment
        })
        cake[0].save(function(err){
            if(err){
                console.log('update failed')
                for(var key in err.errors){
                    req.flash('task', err.errors[key].message);
                    }
                res.json({error: err})
            }else{
                console.log('Successfully updated cake')
                res.json({message: "Success"})
            }
        })
        })
    }
// end of exports
}