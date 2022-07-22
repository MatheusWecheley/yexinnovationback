import { ApolloServer } from 'apollo-server';
const typeDefs = require('./src/services/graphql/typeDefs')
import resolvers from './src/services/graphql/resolvers'
require('./src/database/database')






const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
});
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});