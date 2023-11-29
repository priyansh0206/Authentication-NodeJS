// initializing the express in project and setting up port
const express = require('express');
//setting up the port number
const port = 3000;

//variable app for using the express
const app = express();

//variable for initializing the Database connection
const db = require('./config/mongoose');

//variable for using the SAAS
const sassMiddleWare = require('node-sass-middleware');

// Middleware to parse URL-encoded data
app.use(express.urlencoded());

app.set('view engine', 'ejs');
app.set('views', './views');

//setup the SASS middleware for using the SCSS
app.use(sassMiddleWare({
    src: './assets/scss',
    dest: './assets/css',
    debug: true,
    outFile: 'extended',
    prefix: '/css'
}));

app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log(err);
    }
    console.log("Server is Running on Port: ", port);
});