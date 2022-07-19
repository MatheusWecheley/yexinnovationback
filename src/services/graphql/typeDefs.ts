const { gql } = require('apollo-server');

const types = gql`
  type User {
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
    node: [clientsFilter]
  }

  type ClientsConnection {
    pageInfo: PageInfo!
    totalCountL: Int!
    nodes: [clients!]!
  }

  input ClientInput {
    socialReason: String!
    cnpj: String!
    address: Address!
    phone: String!
    logo: String
  }

  input ClientUpdateInput {
    id: ID!
    socialReason: String
    cnpj: String
    address: Address
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

  type Query {
    users: [User]
    user(id: ID!): User
    getClient(id: ID!): Client!
    listClients(
      first: Int
      after: String
      clientsFilter: ClientsFilter
    ): ClientsConnection
  }

  type Mutation {
    createUser(user: UserInput): User
    addClient(clientInput: ClientInput!): Boolean
    updateClient(clientUpdateInput: ClientUpdateInput!): Boolean
    deleteClient(id: ID!): Boolean
  }
`;

module.exports = types;
