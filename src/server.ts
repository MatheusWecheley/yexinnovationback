import { ApolloServer } from 'apollo-server';
import {AppDataSource} from '../src/database/database'
import typeDefs from './services/graphql/typeDefs'
import resolvers from './services/graphql/resvolvers'
import { User } from './services/entitiy/users/User';




AppDataSource.initialize()
    .then(() => {
        console.log(`Data Source has been initialized! `)
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
});

const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
});
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});