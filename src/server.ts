import { ApolloServer } from 'apollo-server';
import { verifyToken } from './auth';
const {ApolloServerPluginLandingPageLocalDefault } = require('apollo-server-core');
import typeDefs from './services/graphql/typeDefs'
import resolvers from './services/graphql/resolvers'
const mongoose = require('mongoose');

mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost/1_0', { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Connected to Mongoose Sucess!'))
.catch((err) => console.error(err))



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