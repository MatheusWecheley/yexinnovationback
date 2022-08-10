const User = require('../schemas/user/User');
import { Users } from '../models/user/User'
import { Login } from '../models/user/userLogin';
import {Products} from '../models/product/product'


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

    createProducts: async (_, {product}, context) => {
      // if(!context.user) throw new Error(`You don't have authorization`);
      const newProduct = new Products()
      return await newProduct.createProduct({product});
    },

    updateProducts:                    async (_, {id, product}, context) => {
      const update = new Products();
      await update.updateProduct(id,product)
      return {update};
    }

  },
};

export default resolvers;
