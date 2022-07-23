const User = require('../../schemas/user/User');
import {hashedPassword,createToken,} from '../../../../auth';


export class Users  {
    async createUser({user}): Promise<object> {
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
            return {token, newUser};
        } catch (err) {
            throw new Error(err.message);
          }
    }
}