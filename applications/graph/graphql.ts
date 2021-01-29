import { ApolloServer } from 'apollo-server-lambda'

import { environment } from './environment'
import { resolvers } from './src/resolvers'
import { typeDefs } from './src/type-defs'

const server: ApolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: '/dev/graphql'
  },
  context: ({ event }) => ({
    authScope: event.headers.authorization == environment.AUTH ? true : false
  })
})

export const graphqlHandler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true
  }
})
