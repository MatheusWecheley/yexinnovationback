const User = require('../models/users/User')



const resvolvers = {
    Query: {
        users() {
            return User.find();
        },
        user(_,{id}) {
            return User.findById(id)
        }
    },
    Mutation: {
        async createUser(_, {user}) {
           const newUser = new User(user) 
           
           return await newUser.save()
        }
    }
}

export default resvolvers;

