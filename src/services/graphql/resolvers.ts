import {UserModel} from '../schemas/user/User';
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

    deleteUsers: async (_, {UserDelete}) => {
      const userDelete = new Users();
      return await userDelete.deleteUser(UserDelete)
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

    updateProducts: async (_, {productUpdateinput}, context) => {
      const update = new Products();
      return await update.updateProduct(productUpdateinput);
    },

    deleteProducts: async( _, {ProductDeleteInput}) => {
      const productDelete = new Products();
      return await productDelete.deleteProduct(ProductDeleteInput);
    }

  },
};

export default resolvers;
