const User = require('../schemas/user/User')
import {UserInput, Users} from '../models/user/User'


export interface IUserInterface {
    createUser(user: {user: any}): Promise<object | string>;

    updateUser(id: string, userInput: UserInput): Promise<boolean | object>;
}