const { gql } = require('apollo-server-express');

const typeDefs = gql `

type User {
    _id: ID
    username: String
    email: String
    comments: [Comment]
    friends: [User]
    friendCount: Int
}
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
}
type Auth {
    token: ID!
    user: User
}

`;

module.exports = typeDefs;