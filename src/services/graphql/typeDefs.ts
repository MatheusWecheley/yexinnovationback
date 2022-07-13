const { gql } = require('apollo-server');

export default gql`

type Worker {
  id: ID!
  socialReason: String!
  cnpj: Int!
  address: Address
  phone: Int!
  logo: String
  rating: Int
  feedbacks: String
}

type Address {
  street: String
  number: Int
  neighbourhood: String

}

input workerInput {
  socialReason: String!
  cnpj: Int!
  phone: Int!
  logo: String
}

type User {
  name: String!
  lastName: String!
  phone: Int!
  email: String!
  password: String!
}

input userInput {
  name: String!
  lastName: String!
}

type Query {
  name: String!
  lastName: String!
}

type Mutation {
  createWorker(workerInput: workerInput!): Worker!
  createUser(userInput: userInput!): User!
}
`;
