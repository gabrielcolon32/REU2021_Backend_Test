const express = require('express');
const db = require('./db/index');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// Import Routes
const postsRoute = require('./routes/posts');
const userRoute = require('./routes/user');
const meetupsRoute = require('./routes/meetups');
const favoritesRoute = require('./routes/favorites');

db.on('error', console.error.bind(console, 'MongoDB connection error: '))



app.use(bodyParser.json());
app.use(cors({
    origin: "*",
    methods: ["GET", "POST"]
}));

// Routes

//Middlewares execute everytime we change route
app.use('/posts', postsRoute);

app.use('/users', userRoute);

app.use('/meetups', meetupsRoute);

app.use('/favorites', favoritesRoute);



// Listen at port 3000
app.listen(3000);

