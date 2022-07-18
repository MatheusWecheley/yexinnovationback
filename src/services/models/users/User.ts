const mongoose = require('mongoose');

const numberValidator = /\d{2}-\d{4}-\d{4}/

const UserSchema = mongoose.Schema({
    name: {type: String},
    lastName: {type: String},
    phone: { type: Number}, 
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
})

module.exports = mongoose.model('User', UserSchema);
