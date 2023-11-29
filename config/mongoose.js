const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Authentication-NodeJS');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting the DB'));

db.once('open', ()=>{
    console.log("Connection to database is successful");
});

module.exports = db;