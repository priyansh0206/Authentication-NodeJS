// initializing the express in project and setting up port
const express = require('express');
const port = 3000;

//variable app for using the express
const app = express();

// Middleware to parse URL-encoded data
app.use(express.urlencoded());

app.listen(port, function(err){
    if(err){
        console.log(err);
    }
    console.log("Server is Running on Port: ", port);
});