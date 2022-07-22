const User = require('../schemas/user/User')
import {hashedPassword,decryptedPassword,createToken, } from '../../../auth';


export interface IUserInterface {
    createUser: () => string
}