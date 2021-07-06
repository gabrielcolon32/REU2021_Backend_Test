const express = require('express');
const Meetup = require('../models/Meetups');

//Initialize Router
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const meetups = await Meetup.find({favorite: 1});
        res.json(meetups);
    }
    catch (err) {
        res.json({ message: err });
    }
});

router.post('/addFavorite', async(req, res) => {
    try{
        const addFavorite = await Meetup.findOneAndUpdate({ title: req.body.title }, { $set: { favorite: 1 }}, {new: true}, (err, meetup) => {
            if(err){
                res.log(err);
            }else{
                res.json(meetup);
            }
        });
    }
    catch{
        console.log(err);
    }
});
router.post('/deleteFavorite', async(req, res) => {
    try {
        const addFavorite = await Meetup.findOneAndUpdate({ title: req.body.title }, { $set: { favorite: 0 } }, { new: true }, (err, meetup) => {
            if (err) {
                res.log(err);
            } else {
                res.json(meetup);
            }
        });
    }
    catch {
    }
});


module.exports = router