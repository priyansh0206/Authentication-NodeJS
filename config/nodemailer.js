const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'developer.priyansh0@gmail.com',
        pass: 'jgii zflo yxbw hfot'
    },
});

module.exports = transporter;