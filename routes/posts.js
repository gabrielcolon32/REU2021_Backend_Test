const express = require('express');
const Post = require('../models/Posts');

//Initialize Router
const router = express.Router();


// Get all Posts
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }
    catch(err){
        res.json({message: err});
    }
});

// Post Request Handler
router.post('/', (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    // Save post to db
    post.save()
        //Promise
        .then(
            data => {
                res.json(data);
        })
        .catch( e => {
            res.json({
                message: e
            });
        });
});

module.exports = router