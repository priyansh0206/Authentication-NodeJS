const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://priyanshadmin:admin@clustermain.vvg6gyt.mongodb.net/AuthenticationNodeJS?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting the DB'));

db.once('open', ()=>{
    console.log("Connection to database is successful");
});

module.exports = db;