const express = require('express');

//Initialize Router
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Post Page!')
});

router.get('/specific', (req, res) => {
    res.send('Specific Page!')
});

module.exports = router