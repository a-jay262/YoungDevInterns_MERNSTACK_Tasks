const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    uName : String,
    email: String,
    password: String,
    type: String,
}, {timestamps: true});



module.exports = mongoose.model('User', userSchema);
