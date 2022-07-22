const User = require('../schemas/user/User');
import {
  hashedPassword,
  decryptedPassword,
  createToken,
} from '../../../auth';
import {Users} from '../models/client/User'



const resolvers = {
  Query: {
    async users() {
      return await User.find();
    },
    user(_, { id }) {
      return User.findById(id);
    },
  },
  Mutation: {
    createUsers: (_, { user }) => {
      var usr = new Users();
      usr.createUser({user})
    },
    
    login: async (_, { email, password }) => {
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
    },
  },
};

export default resolvers;
