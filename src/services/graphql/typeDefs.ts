import { gql } from 'apollo-server';

export default gql`
  directive @auth(requires: Role = ADMIN) on OBJECT | FIELD_DEFINITION

  enum Role {
    ADMIN
    REVIEWER
    USER
  }

  type User @auth(requires: USER) {
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

  input ProductInput {
    name: String!
    price: Float!
    description: String
    quantity: Int!
  }

  type Product {
    id: ID!
    name: String!
    price: Float!
    description: String
    quantity: Int!
    image: String
  }

  input ProductUpdateinput {
    id: ID!
    name: String
    price: Float
    description: String
    image: String
  }

  input UserDelete {
    id: ID
    name: String!
  }
  
  input ProductDeleteInput {
    id: ID!
    name: String
  }

  type Query {
    users: [User]
    user(id: ID!): User
    getClient(id: ID!): Client!
    listClients(first: Int, after: String): [Client]
  }

  type Mutation {
    createUsers(user: UserInput): AuthUser!
    updateUser(id: String, user: UserInput): User
    deleteUsers(UserDelete: UserDelete): Boolean
    login(email: String!, senha: String!): AuthUser!
    addClient(clientInput: ClientInput!): Boolean
    updateClient(clientUpdateInput: ClientUpdateInput!): Boolean
    deleteClient(id: ID!): Boolean
    createProducts(product: ProductInput): Product
    updateProducts(productUpdateinput: ProductUpdateinput): Product
    deleteProducts(ProductDeleteInput: ProductDeleteInput): Boolean
  }
`;
