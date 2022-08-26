const User = require('../../schemas/user/User');
import {hashedPassword,createToken,} from '../../../auth';
import { IUserInterface } from '../../src/userService';


export type UserDelete = {
  id?: String
  name?: String
}

export type UserInput = {
  name?: string
  lastName?: string
  email?: string
  phone?: string
  password?: string
}

export class Users implements IUserInterface  {

    async createUser({user}): Promise<object | string> {
        try {
            const userVerify = await User.findOne({
                email: user.email,
            });
            if (userVerify) {
              throw new Error(`User already exists`);
            }
            const newUser = await new User({
                name: user.name,
                lastName: user.lastName,
                email: user.email,
                phone: user.phone,
                password: await hashedPassword(user.password),
            });
            const token = createToken({
              id: newUser.id,
              email: newUser.email,
            });
            await newUser.save()
            token.toString();
            return {token, newUser};
        } catch (err) {
            throw new Error(err.message);
          }
    }

    async updateUser(id: string, userInput: UserInput): Promise<boolean | object> {
      try {
        const userVerify = await User.findById(id)
        if(userVerify) {
          const update = await User.findByIdAndUpdate(id, userInput, {
            new: true,
            useFindAndModify: false
          })
          return update
        }
      } catch (err) {
        return false
      }
    }

    async deleteUser({id, ...UserDelete}: UserDelete): Promise<boolean> {
      try {
        const userVerify = await User.findById(id);
        if(userVerify) {
          const userDelete = await User.findOneAndDelete({name: UserDelete});
          return true
        }
      } catch (err) {
        return false
      }
    }
}