var mongoose = require('mongoose');
var Player = mongoose.model('Player');

module.exports = {

    all: function(req, res){
        Player.find({}, function(err, players){
            if (err) {
                console.log("no player found")
                for(var key in err.errors){
                    req.flash('players', err.errors[key].message);
                    }
                res.json({error: err})
            }else{
                console.log("players found")
                res.json({players:players})
            }
        })
    },

    display: function(req, res){
        console.log('passes id', req.params.id)
        Player.find({_id: req.params.id}, function(err, player){
            if (err){
                console.log("Player not found")
                for(var key in err.errors){
                    req.flash('player', err.errors[key].message);
                    }
                res.json({error: err})
            }else{
                console.log('Player found')
                res.json({players:player})
            }
        })
    },

    new: function(req, res){
        console.log("incoming data", req.body)
        form = req.body;
        var player = new Player({
            name: form.name,
            position: form.position
        });
        player.save(function(err){
            if(err){
                console.log('creation failed')
                for(var key in err.errors){
                    req.flash('player', err.errors[key].message);
                }
                res.json({error: err})
            }else{
                console.log("successfully created player")
                res.json({players:player})
            }
        })
    },

    update: function(req, res){
        console.log("update data", req.body)
        form = req.body;
        Player.find({_id:req.params.id}, function(err, player){
            if (form.game1status.length > 0){
                console.log('game1');
                player[0].game1status = form.game1status;
            }
            if (form.game2status.length > 0){
                console.log('game2');
                player[0].game2status = form.game2status;
            }
            if (form.game3status.length > 0){
                console.log('game3');
                player[0].game3status = form.game3status;
            }
            player[0].save(function(err){
            if(err){
                console.log('update failed')
                for(var key in err.errors){
                    req.flash('player', err.errors[key].message);
                    }
                res.json({error: err})
            }else{
                console.log('Successfully updated player')
                res.json({message: "Success"})
            }
        })
        })
    },

    delete: function(req, res){
        console.log("update data", req.body)
        form = req.body;
        Player.find({_id:req.params.id}, function(err, player){
        player[0].remove(function(err){
            if(err){
                console.log('delete failed')
                for(var key in err.errors){
                    req.flash('player', err.errors[key].message);
                    }
                res.json({error: err})
            }else{
                console.log('Successfully deleted player')
                res.json({message: "Success"})
            }
        })
        })
    }
// end of exports
}