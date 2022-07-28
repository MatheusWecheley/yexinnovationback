const { gql } = require('apollo-server');

const types = gql`
  directive @auth(requires: Role = ADMIN) on OBJECT | FIELD_DEFINITION

  enum Role {
    ADMIN
    REVIEWER
    USER
  }

  type User @auth(requires: USER){
    id: ID!
    name: String!
    lastName: String!
    phone: Int!
    email: String!
    password: String!
  }

  input UserInput {
    name: String
    lastName: String
    phone: Int
    email: String 
    password: String
  }

  type ClientFilter {
    limit: Int
  }

  input ClientUpdateInput {
    id: ID!
    socialReason: String
    cnpj: String
    address: String
    phone: String
    logo: String
  }

  type Address {
    zipCode: String!
    street: String!
    num: String!
    Neighborhood: String!
    complement: String
    state: String!
    city: String!
  }

  input ClientInput {
    socialReason: String!
    cnpj: String!
    address: String
    phone: String!
    logo: String
  }

  type Client {
    id: ID!
    socialReason: String!
    cnpj: String!
    address: Address!
    phone: String!
    logo: String
    rating: Int
    feedbacks: [String]
  }

  type AuthUser {
    token: String!
    newUser: User!
  }

  type Query {
    users: [User]
    user(id: ID!): User
    getClient(id: ID!): Client!
    listClients(
      first: Int
      after: String
    ): [Client]
  }

  type Mutation {
    createUsers(user: UserInput): AuthUser!
    updateUser(id: String, user: UserInput): AuthUser
    login(email: String!, senha: String!): AuthUser!
    addClient(clientInput: ClientInput!): Boolean
    updateClient(clientUpdateInput: ClientUpdateInput!): Boolean
    deleteClient(id: ID!): Boolean
  }
`;

module.exports = types;
