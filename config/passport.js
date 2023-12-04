const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/users');

const bcrypt = require('bcrypt');

//authentication using passport
passport.use(new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true,
    },
    async function (req, email, password, done) {
        try {
            const user = await User.findOne({ email: email });
            if (!user) {
                req.flash('error', 'Invalid Username / Password');
                console.log("User not exist");
                return done(null, false);
            }

            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                req.flash('error', 'Invalid Username / Password');
                console.log("User password not exist");
                return done(null, false);
            }
            console.log("Successfulllll");
            return done(null, user);
        } catch (err) {
            req.flash('error', err);
            console.log(err);
            return done(err);
        }
    }
));

passport.serializeUser(function(user,done){
    return done(null, user.id);
});

passport.deserializeUser(async function(id, done){
    try {
        const user = await User.findById(id);
        
        if (!user) {
            console.log("User not found");
            return done(null, false);
        }

        return done(null, user);
    } catch (err) {
        console.error("Error in finding the user --> Passport:", err);
        return done(err);
    }
});

//for checking the user is authenticated or not
passport.checkAuthentication = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash('error', 'Please Sign In First !');
    return res.redirect('/');
}

passport.checkUnAuthentication = function(req, res, next){
    if(!(req.isAuthenticated())){
        return next();
    }
    req.flash('error', 'Please Logout First !');
    return res.redirect('/dashboard');
}

//for setting up the authenticated user
passport.setAuthenticatedUser = function(req, res, next){
    if(req.isAuthenticated()){
        res.locals.user = req.user;
    }
    next();
}

module.exports= passport;