const User = require('../../schemas/user/User');
import {hashedPassword,createToken,} from '../../../../auth';
import { IUserInterface } from '../../src/userService';


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
              throw new Error(`User has existed`);
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
          await update.save()
          return true
        }
      } catch (err) {
        return false
      }
    }
}