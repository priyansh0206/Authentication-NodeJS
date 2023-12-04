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

//variable for using the sessions
const session = require('express-session');

//variable for using the sessions using MongoDB
const MongoStore = require('connect-mongo');

//vairable for using the passport libraries
const passport = require('passport');
const passLocal = require('./config/passport');

const flash = require('connect-flash');
const flashMware = require('./config/flash');
const cookieParser = require('cookie-parser');
// Middleware to parse URL-encoded data
app.use(express.urlencoded());
app.use(cookieParser());
//setting up the express-ejs-layouts for enabling onepage view
app.use(expressLayouts);

//setting up the views engine to ejs and the directory for views folder
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

//setting the up the assets folder to be used as static
app.use(express.static('assets'));

//setup for using the sessions in project using MongoDB
const store = MongoStore.create({
    mongoUrl: 'mongodb://127.0.0.1:27017/Authentication-NodeJS', // Replace with your MongoDB connection URL
    collectionName: 'sessions', // Optional: Specify the name of the collection (default is 'sessions')
    autoRemove: 'enabled', // Optional: Disable automatic session removal
});
//setup for using the Sessions with help of MongoStore
app.use(session({
    name: 'Authentication_NodeJS',
    secret: 'AuthenticationNodeJS',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: store
}));

app.use(passport.initialize());
app.use(passport.session());
// app.use(passport.setAuthenticatedUser);

app.use(flash());
app.use(flashMware.setFlash);

//setting up the routes
app.use('/', require('./routes'));

//starting the server
app.listen(port, function(err){
    if(err){
        console.log(err);
    }
    console.log("Server is Running on Port: ", port);
});