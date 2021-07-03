const mongoose = require('mongoose');
require('dotenv/config');

// Connect to database
try{
    mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true } , () => {console.log('Connection to DB succesful!')})
}
catch{ e =>
    {console.error('Connection error', e.message)}
};
// Instantiate connection
const db = mongoose.connection;

// Export connection instance
module.exports = db;
