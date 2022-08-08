import mongoose from 'mongoose'
const jwt = require('jsonwebtoken');
require('dotenv').config();
const secret = process.env.JWT_TOKEN;

const UserSchema = new mongoose.Schema({
    name: { type: String },
    lastName: { type: String },
    phone: { type: Number },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
})




module.exports = mongoose.model('User', UserSchema);
