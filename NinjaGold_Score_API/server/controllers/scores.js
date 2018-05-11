const mongoose = require('mongoose');
const Score = require('./../models/score');

module.exports = {
    getScores:
        (req, res) => {
            Score.find({}, (err, scores) => {
                if(err){
                    res.json({message: "Error", error: err});
                }else{
                    res.json({message: "Success", data: scores});
                }
            })
        },
    topScore:
        (req, res) => {
            Score.findOne({}, (err, score) => {
                if(err){
                    res.json({message: "Error", error: err});
                }else{
                    res.json({message: "Success", data: score})
                }
            }).sort({ score: -1 })
        },
    newScore:
        (req, res) => {
            Score.create({}, (err, score) => {
                if(err){
                    res.json({message: "Error", error: err});
                }else{
                    res.json({message: "Success", data: score});
                }
            })
        },
    updateScore:
        (req, res) => {
            Score.findOne({_id: req.params.id}, (err, score) => {
                if(!score){
                    res.json({message: "Error.",error: "This score isn't in our database"});
                }else if(err){
                    res.json({message: "Error", error: err});
                }else{
                    Score.update(score, {score: req.params.score}, (err) => {
                        if(err){
                            res.json({message: "Error", error: err})
                        }else{
                            res.json({message: "Success", data: score});
                        }
                    })
                }
            })
        },
}