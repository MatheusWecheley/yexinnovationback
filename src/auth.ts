const jwt = require('jsonwebtoken');
import {verify} from 'jsonwebtoken'
const crypto = require('crypto');
require("dotenv").config();


export const hashedPassword = (password: string) => {
    return new Promise<string>((resolve, reject) => {
        const salt = crypto.randomBytes(8).toString('hex');
        crypto.scrypt(password, salt, 64, (err, hash) => {
            if(err) reject(err);
            resolve(`${salt}:${hash.toString('hex')}`);
        })
    })
}

export const decryptedPassword = (password: string, hashedPassword: string) => {
    return new Promise<boolean>((resolve, reject) => {
        const [salt, hash] = hashedPassword.split(':');
        crypto.scrypt(password, salt, 64, (err, hashVerifying) => {
            if(err) reject(err);
            resolve(hash === hashVerifying.toString('hex'));
        })
    })
}

export const createToken = (payload: object) => jwt.sign(payload, process.env.JWT_TOKEN, {expiresIn: '10d'})

export const verifyToken = (token: string) => {
    try {
        if(token) {
            const result = verify(token, process.env.JWT_TOKEN);
            return result;
        }
        return "null"
    }catch (err) {
        return null
    }
}