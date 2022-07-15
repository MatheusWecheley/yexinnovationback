const { gql } = require('apollo-server');

const types = gql`
  type User {
    id: ID!
    name: String
    lastName: String
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }

  type Mutation {
    createUser(user: UserInput): User
  }

  input UserInput {
    name: String
    lastName: String
  }
`;

module.exports = types;