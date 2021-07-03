const express = require('express');
const db = require('./db/index');
const app = express();

// Import Routes
const postsRoute = require('./routes/posts');
const userRoute = require('./routes/user');

db.on('error', console.error.bind(console, 'MongoDB connection error: '))

// Routes

//Middlewares execute everytime we change route
app.use('/posts', postsRoute);

app.use('/user', userRoute);


// Listen at port 3000
app.listen(3000);

