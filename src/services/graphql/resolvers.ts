<<<<<<<<< Temporary merge branch 1
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
=========
const User = require('../schemas/user/User');
import {Users} from '../models/user/User'
import { Login } from '../models/user/userLogin';
import { Products } from '../models/product/product';

const resolvers = {
  Query: {
    users: async (_, args, context) => {
      if (!context.user) throw new Error("You don't have authorization!");
      return await UserModel.find();
    },
    user: async (_, { id }, context) => {
      if (!context.user) throw new Error("You don't have authorization!");
      return await UserModel.findById(id);
    }
  },
  Mutation: {
    createUsers: async (_, { user }) => {
      const newUser = new Users();
      return await newUser.createUser({ user });
    },

    login: async (_, { email, password }) => {
      const loginUser = new Login();
      loginUser.userLogin({ email, password });
    },

    createProducts: async (_, { product }, context) => {
      // if(!context.user) throw new Error(`You don't have authorization`);
      const newProduct = new Products()
      return await newProduct.createProduct({product});
    },

  },
};

export default resolvers;
