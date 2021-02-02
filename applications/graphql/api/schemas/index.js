import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  type Query {
    links: [Links]!
    expertise: [Expertise]!
    me: Me!
  }
  type Expertise {
    id: ID!
    title: String!
    content: String!
  }
  type Links {
    id: ID!
    title: String!
    url: String!
  }
  type Me {
    id: ID!
    name: String!
    job: String!
  }
`
