import { ApolloServer } from 'apollo-server';
import { verifyToken } from './auth';
const {ApolloServerPluginLandingPageLocalDefault } = require('apollo-server-core');
const typeDefs = require('./src/services/graphql/typeDefs')
import resolvers from './src/services/graphql/resolvers'
require('./src/database/database')



const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    context: ({req}) => {
        const token = req.get('Authorization') || '';;
        return { auth: verifyToken(token.replace('Bearer ', '')) }
    }, 
});
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});

