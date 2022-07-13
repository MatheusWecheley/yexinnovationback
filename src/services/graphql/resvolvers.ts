import { User } from "../entitiy/users/User"
import { getMongoManager, getRepository } from "typeorm"


const resvolvers = {
    Query: {

    },
    Mutation: {
        async createUser(_, {userInput: {name, lastName}}) {
           const user = new User();
           user.firstName = name;
           user.lastName = lastName;
        //    const manager = getMongoManager();
           const txt = getRepository(test)
           await txt.save(user);
        }
    }
}

export default resvolvers;

