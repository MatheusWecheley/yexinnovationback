const User = require('../models/users/User');
import {
  hashedPassword,
  decryptedPassword,
  createToken,
} from '../../../auth';

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
    createUser: async (_, { user }) => {
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
        return { token, user };
      } catch (err) {
        throw new Error(err.message);
      }
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
