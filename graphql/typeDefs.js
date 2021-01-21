const gql = require('graphql-tag');

module.exports = gql`

type Post {
    id: ID!
    body: String!
    username: String!
    createdAt: String!
}

type Query {
    queryPosts:[Post] 
}

type User {
    id: ID!
    username: String!
    email: String!
    token: String!
    createdAt: String!
}

input InputUser {
    username: String!
    email: String!
    password: String!
    confirmPassword: String!
}

type Mutation {
    registerUser(inputUser: InputUser): User!
}

schema {
    query: Query
    mutation: Mutation
}
`