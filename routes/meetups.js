const express = require('express');
const Meetup = require('../models/Meetups');
const User = require('../models/Users');

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
        description: req.body.description,
        participants: req.body.participants
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
        const meetup= await Meetup.findOne({ title: req.body.title });
        const namesList = meetup.participants; 
        // const participants = [];
        // for(var i = 0; i<namesList.length; i++){
        //     const participant = await User.findOne({name: namesList[i]});
        //     participants.push(participant);
        // }
        res.send(namesList);
    }
    catch (err) {
        res.json({ message: err });
    }

});

router.post('/addParticipants', async (req, res) => {
    try {
        const meetup = await Meetup.findOne({title: req.body.title});
        meetup.toObject();
        meetup.participants.push(req.body.participant.name);  
        meetup.save();
        console.log(meetup.participants)
        res.send(meetup.participants);
    }
    catch (err) {
        res.json({ message: err });
    }
   
    
});


router.post('/removeParticipant', async (req, res) => {
    try {
        const meetup = await Meetup.findOne({ title: req.body.title });
        meetup.toObject();
        meetup.participants.remove(req.body.participant);
        res.send(meetup.participants);
        meetup.save();
        console.log(meetup.participants);
    }
    catch (err) {
        res.json({ message: err });
    }

});


module.exports = router