const crypto = require('crypto');
const bcrypt = require('bcrypt');

const User = require('../models/users');

const transporter = require('../config/nodemailer');

module.exports.default = function (req, res) {
    return res.status(404).send('Page not found');
}

module.exports.homePage = function (req, res) {
    return res.render('homepage', {
        title: 'Homepage'
    });
}

module.exports.login = function (req, res) {
    return res.render('login', {
        title: 'Loginpage'
    });
}

module.exports.dashboard = function (req, res) {
    return res.render('dashboard', {
        title: 'Dashboard'
    });
}

module.exports.verifyEmail = function (req, res) {
    return res.render('verifyemail', {
        title: 'Verify Email'
    });
}

module.exports.createUser = async function (req, res) {
    try {
        const token = crypto.randomBytes(32).toString('hex');
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const tokenExpired = new Date();
        tokenExpired.setMinutes(tokenExpired.getMinutes() + 30);
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            token: token,
            tokenExpired: tokenExpired
        });
        const verifyLink = `http://127.0.0.1:3000/verify/${token}`;
        const mailOptions = {
            from: 'developer.priyansh0@gmail.com',
            to: req.body.email,
            subject: 'Email Verification for NodeJS Authentication',
            html: `
                <h3 style="color: black;">Hi ${req.body.name},</h3>
                <p style="color: black;">We have received the registration request for your account.</p>
                <p>Click on the following link to verify your email: <i><b>${verifyLink}</b></i></p>
                <p><b>Please Note: </b> The is valid for 30 minutes only.</p>
                <p style="color: black;">Thank You ! <br>
                Authentication NodeJS <br>
                for support : developer.priyansh0@gmail.com</p>
            `
        };
        transporter.sendMail(mailOptions, (err) => {
            if (err) {
                req.flash('error', 'Error in sending verification email. Please try again from here !');
                return res.redirect('/verify-email');
            }
            req.flash('success', 'Account created. Please check your email for verification.');
            return res.redirect('/login');
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal Server Error !");
    }
}

module.exports.verifyUser = async function (req, res) {
    try {
        const user = await User.findOne({ token: req.params.token });
        if (user) {
            if (user.tokenExpired < new Date()) {
                return res.status(400).send(`Link Expired ! please re-request from <a href="/verify-email"> CLICK HERE </a>`);
            }
            user.token = "";
            user.tokenExpired = null;
            user.verified = true;
            await user.save();
            return res.render('message', {
                title: 'Verification Successful',
                message: 'Account Verified Successfully, you may try for the Login !'
            });
        } else {
            return res.status(400).send('Invalid verification link ! please re-request from <a href="/verify-email"> CLICK HERE </a>');
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal Server Error !");
    }
}

module.exports.createSession = async function (req, res) {
    req.flash('success', 'Logged in Successfully');
    return res.redirect('/dashboard');
}

module.exports.deleteSession = async function (req, res) {
    await req.logout(function (err) {
        if (err) {
            req.flash('error', 'Error in signout !');
            return res.redirect('/dashboard');
        }
        req.flash('success', 'You have logged out !');
        return res.redirect('/login');
    });
}

module.exports.resendVerification = async function (req, res) {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            req.flash('error', 'No account found with provided email, please Signup again !');
            return res.redirect('/login');
        } else {
            const token = crypto.randomBytes(32).toString('hex');
            const tokenExpired = new Date();
            tokenExpired.setMinutes(tokenExpired.getMinutes() + 30);
            const verifyLink = `http://127.0.0.1:3000/verify/${token}`;
            const mailOptions = {
                from: 'developer.priyansh0@gmail.com',
                to: user.email,
                subject: 'Email Verification for NodeJS Authentication',
                html: `
                <h3 style="color: black;">Hi ${user.name},</h3>
                <p style="color: black;">We have received the registration request for your account.</p>
                <p>Click on the following link to verify your email: <i><b>${verifyLink}</b></i></p>
                <p><b>Please Note: </b> The is valid for 30 minutes only.</p>
                <p style="color: black;">Thank You ! <br>
                Authentication NodeJS <br>
                for support : developer.priyansh0@gmail.com</p>
            `
            };
            user.token = token;
            user.tokenExpired = tokenExpired;
            await user.save();
            transporter.sendMail(mailOptions, (err) => {
                if (err) {
                    req.flash('error', 'Error in sending verification email. Please try again from here !');
                    return res.redirect('/verify-email');
                }
                req.flash('success', 'Please check your inbox for email verification.');
                return res.redirect('/login');
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal Server error");
    }
}