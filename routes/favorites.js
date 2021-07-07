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

router.get('/favoritesAmount', async (req, res) => {
    try {
        const meetupsAmount = await Meetup.find({favorite: 1}, (err, meetups) => {
            if(err){
                console.log(err)
            }else{
                res.json(meetups);
            }
        });
    }
    catch (err) {
        res.json({ message: err });
    }
});

router.post('/isFavorite', async (req, res) => {
    try {
        const meetup = await Meetup.find({ title: req.body.title, favorite: 1 }, (err, meetup) => {
            if (err) {
                console.log(err)
            } else {
                res.send(meetup);
            }
        });
    }
    catch (err) {
        res.json({ message: err });
    }
});

router.post('/addFavorite', async(req, res) => {
    try{
        const addFavorite = await Meetup.findOneAndUpdate({ title: req.body.title }, { $set: { favorite: 1 }},{new: true}, (err, meetup) => {
            if(err){
                res.log(err);
            }else{
                res.json(meetup);
            }
        });
    }
    catch (err) {
        res.json({ message: err });
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
    catch (err) {
        res.json({ message: err });
    }
});


module.exports = router