const express = require('express');
const Meetup = require('../models/Meetups');

//Initialize Router
const router = express.Router();

router.get('/', async(req, res) => {
    try {
        const meetups = await Meetup.find();
        res.json(meetups);
    }
    catch (err) {
        res.json({ message: err });
    }
});

router.post('/', (req, res) => {
    const meetup = new Meetup({
        image: req.body.image,
        title: req.body.title,
        address: req.body.address,
        description: req.body.description
    });
    // Save post to db
    meetup.save()
        //Promise
        .then(
            data => {
                res.json(data);
            })
        .catch(e => {
            res.json({
                message: e
            });
        });
});


module.exports = router