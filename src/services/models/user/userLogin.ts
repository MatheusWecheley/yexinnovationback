const User = require('../../schemas/user/User')
import { createToken, decryptedPassword } from "../../../../auth";

export class Login {
    async userLogin({ email, password}): Promise<{}> {
        try {
            const user = await User.findOne({ email });
            if (!user) {
              throw new Error('User or email incorrect!');
            }
    
            const validPassword = await decryptedPassword(
              password,
              user.password
            );
            if (!validPassword) {
              throw new Error('User or email incorrect!');
            }
    
            const token = createToken({
              id: user.id,
              email: user.email,
            });
            return { token, user };
          } catch (error) {
            throw new Error(error.message);
          }
    }
}