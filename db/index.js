const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// Connect to database
try{
    mongoose.connect("mongodb://127.0.0.1:27017/localtest", { useNewUrlParser: true, useUnifiedTopology: true } , () => {console.log('Connection to DB succesful!')})
}
catch{ e =>
    {console.error('Connection error', e.message)}
};
// Instantiate connection
const db = mongoose.connection;

// Export connection instance
module.exports = db;