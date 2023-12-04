const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        default: false
    },
    token: {
        type: String,
        unique: true
    },
    tokenExpired : {
        type: Date
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;