const mongoose  = require('mongoose');

const UserSchema = new mongoose.Schema({

        username: String,
        gender: String,
        dob: Date,
        number: Number,
        password: String
})

module.exports = mongoose.model('user', UserSchema);