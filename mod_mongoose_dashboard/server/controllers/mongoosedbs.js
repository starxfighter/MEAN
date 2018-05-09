var mongoose = require('mongoose')
var Muser = mongoose.model('Muser') // We are retrieving this Schema from our Models, named 'User'

module.exports = {

    index : function(req, res){
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
    },

    displayone: function(req, res){
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
    },

    new: function(req, res){
        res.render('new');
    },

    add: function(req, res){
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
    },

    editone: function(req, res){
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
    },

    updateone: function(req, res){
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
    },

    destroyone: function(req, res){
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
    },

// end of exports    
}