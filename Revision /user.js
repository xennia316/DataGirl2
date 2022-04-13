const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    id: Number,
    age: {
        type: Number,
        min: 0,
        max: 100
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        minlength: 10
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true
    }
})

module.exports = mongoose.model("user", userSchema)