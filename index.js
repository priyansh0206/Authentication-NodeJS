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

//variable for using the express layouts
const expressLayouts = require('express-ejs-layouts');

// Middleware to parse URL-encoded data
app.use(express.urlencoded());

//setting up the express-ejs-layouts for enabling onepage view
app.use(expressLayouts);

//setting up the views engine to ejs and the directory for views folder
app.set('view engine', 'ejs');
app.set('views', './views');

//setting the up the assets folder to be used as static
app.use(express.static('assets'));

//setup the SASS middleware for using the SCSS
app.use(sassMiddleWare({
    src: './assets/scss',
    dest: './assets/css',
    debug: true,
    outFile: 'extended',
    prefix: '/css'
}));

//setting up the routes
app.use('/', require('./routes'));

//starting the server
app.listen(port, function(err){
    if(err){
        console.log(err);
    }
    console.log("Server is Running on Port: ", port);
});