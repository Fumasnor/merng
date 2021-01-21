const {ApolloServer} = require('apollo-server');
const mongoose = require('mongoose');

const {MONGODB} = require('./config')
const resolvers = require('./graphql/resolvers')
const typeDefs = require('./graphql/typeDefs')



const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect(MONGODB, {useNewUrlParser:true, useUnifiedTopology: true } ).then(
    ()=>{
        console.log('mongodb connection established')
        return server.listen({port:5000})
    }
)
.then(res => console.log(res.url))
.catch((err) => console.log(err))