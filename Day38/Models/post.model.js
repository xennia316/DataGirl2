const req = require('express/lib/request');
const mongoose  = require('mongoose');

const UserSchema = new mongoose.Schema({
    data:{
        time: Date,
        message: String,
        user_id:{type: mongoose.ObjectId, ref: 'user'},
    }
})

module.exports = mongoose.model('user', UserSchema);
