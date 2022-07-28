const User = require('../schemas/user/User');
import {Users} from '../models/user/User'
import { Login } from '../models/user/userLogin';


const resolvers = {
  Query: {
    users: async (_, args,  context) => {
      if(!context.user) throw new Error("You don't have authorization!")
      return await User.find();
    },
    user: async (_, { id }, context) => {
      if(!context.user) throw new Error("You don't have authorization!")
      return await User.findById(id);
    },
  },
  Mutation: {
    createUsers: async (_, { user }) => {
      const newUser = new Users();
      return await newUser.createUser({user})
    },
    
    login: async (_, { email, password }) => {
      const loginUser = new Login()
      loginUser.userLogin({email, password});
    },
  },
};

export default resolvers;