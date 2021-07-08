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


router.post('/getParticipants', async (req, res) => {

    try {
        const participants= await Meetup.findOne({ title: req.body.title });
        const participantsList = participants.participants; 
        res.send(participantsList)
    }
    catch (err) {
        res.json({ message: err });
    }

});

router.post('/addParticipants', async (req, res) => {
    
    try {
        const meetup = await Meetup.findOne({title: req.body.title});
        meetup.toObject();
        meetup.participants.push(req.body.participant);
        meetup.save();
        res.send("Completed");
    }
    catch (err) {
        res.json({ message: err });
    }
   
    
});


router.post('/removeParticipant', async (req, res) => {

    try {
        const meetup = await Meetup.findOne({ title: req.body.title });
        meetup.toObject();
        meetup.participants.filter(p => p !==req.body.participant);
        meetup.save();
        res.send("Completed");
    }
    catch (err) {
        res.json({ message: err });
    }


});


module.exports = router