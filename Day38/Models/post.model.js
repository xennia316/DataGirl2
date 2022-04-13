const req = require('express/lib/request');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    message: String,
    user_id: { type: mongoose.ObjectId, ref: 'user' },
},
    { timestamps: true }
);

module.exports = mongoose.model('user', UserSchema);
