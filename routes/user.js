const express = require('express');

//Initialize Router
const router = express.Router();

router.get('/', (req, res) => {
    res.send('User Page!')
});

router.get('/specific', (req, res) => {
    res.send('Specific User Page!')
});

module.exports = router