var mongoose = require('mongoose');
var Note = mongoose.model('Note');

module.exports = {
    
    all: function(req, res){
        // Note.find({}, function(err, notes){
        Note.find({}).sort('-createdAt').exec(function(err, notes){
            if (err){
                console.log("no notes found");
                for(var key in err.errors){
                    req.flash('note', err.errors[key].message);
                    }
                res.json({error: err})
            }else{
                console.log("got at least one note")
                res.json({notes:notes})
            }
        })
    },

    display: function(req, res){
        console.log("passed id", req.params.id)
        Note.find({_id: req.params.id}, function(err, note){
            if(err){
                console.log("note not found")
                for(var key in err.errors){
                    req.flash('note', err.errors[key].message);
                    }
                res.json({error: err})
            }else{
                console.log('note found')
                res.json({notes:note})
            }
        })
    },

    new: function(req, res){
        form = req.body;
        console.log('form', form)
        var note = new Note({
            description: form.description,
        });
        note.save(function(err){
            if(err){
                console.log("creation failed")
                for(var key in err.errors){
                    req.flash('note', err.errors[key].message);
                    }
                    res.json({error: err})   
            }else{
                console.log("successfully created note")
                res.json({notes: note})
            }  
        })
    },

    update: function(req, res){
        form = req.body;
        console.log("form", form)
        Note.find({_id: req.params.id}, function(err, note){
            console.log("note before", note)
            task[0].description = form.description;
            console.log("note after", note)
            note[0].save(function(err){
                if(err){
                    console.log("update failed")
                    for(var key in err.errors){
                        req.flash('note', err.errors[key].message);
                        }
                    res.json({error: err})
                }else{
                    console.log("successfully updated note");
                    res.json({message: "Success"})
                }   
            })
        })
    },

    destroy: function(req, res){
        Note.remove({_id: req.params.id}, function(err){
            if(err){
                console.log("Delete failed")
                for(var key in err.errors){
                    req.flash('note', err.errors[key].message);
                    }
                    res.json({error: err})   
            }else{
                console.log("successfully deleted note")
                res.json({message: "Success"})
            }   
        })
    },

// end of exports
};