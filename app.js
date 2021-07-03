const express = require('express');
const db = require('./db/index');
const app = express();


//Middlewares execute everytime we change route
// app.use('/posts', () => {
//     console.log("Hello!");
// });

db.on('error', console.error.bind(console, 'MongoDB connection error: '))

// Routes
app.get('/', (req, res) => {
    res.send('Home Page!')
});

app.get('/posts', (req, res) => {
    res.send('Post Page!')
});


// Listen at port 3000
app.listen(3000);

