const express = require('express');
const User = require('../models/Users');

//Initialize Router
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    }
    catch (err) {
        res.json({ message: err });
    }
});

router.post('/', (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username
    });
    // Save post to db
    user.save()
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