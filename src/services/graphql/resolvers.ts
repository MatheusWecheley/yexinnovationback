const User = require('../schemas/user/User');
import {Users} from '../models/user/User'
import { Login } from '../models/user/userLogin';


const resolvers = {
  Query: {
    users: async (_, args, { auth }) => {
      if(!auth) throw new Error("You don't have authorization!")
      return await User.find();
    },
    user(_, { id }, {auth}) {
      if(!auth) throw new Error("You don't have authorization!")
      return User.findById(id);
    },
  },
  Mutation: {
    createUsers: async (_, { user }, {auth}) => {
      if(!auth) throw new Error("You don't have authorization!")
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