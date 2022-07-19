const User = require('../models/users/User');

const resolvers = {
  Query: {
    users() {
      return User.find();
    },
    user(_, { id }) {
      return User.findById(id);
    },
  },
  Mutation: {
    async createUser(_, { user }) {
      const newUser = new User(user);
      const sucess = 'User registered success!';
      return await newUser.save();
    },
  },
};

export default resolvers;
