const express = require('express');
const db = require('./db/index');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// Import Routes
const postsRoute = require('./routes/posts');
const userRoute = require('./routes/user');
const meetupsRoute = require('./routes/meetups');

db.on('error', console.error.bind(console, 'MongoDB connection error: '))

app.use(bodyParser.json());
app.use(cors());

// Routes

//Middlewares execute everytime we change route
app.use('/posts', postsRoute);

app.use('/user', userRoute);

app.use('/meetups', meetupsRoute);


// Listen at port 3000
app.listen(3000);

