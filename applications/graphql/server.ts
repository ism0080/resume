/* eslint-disable no-console */
import { ApolloServer, AuthenticationError, makeExecutableSchema } from 'apollo-server-express'
import compression from 'compression'
import cors from 'cors'
import express from 'express'
import { GraphQLSchema } from 'graphql'
import depthLimit from 'graphql-depth-limit'

import { resolvers } from '@project/resolvers'
import { typeDefs } from '@project/schema'

const limit = 7

const schema: GraphQLSchema = makeExecutableSchema({ typeDefs, resolvers })

const app = express()
const server = new ApolloServer({
  schema,
  playground: true,
  validationRules: [depthLimit(limit)],
  context: ({ req }) => {
    const token = req.headers.authorization

    if (token != '12345') throw new AuthenticationError('you must be logged in')
  }
})

app.use(cors({ credentials: true, origin: 'http://localhost:8000' }))
app.use(compression())
server.applyMiddleware({ app, path: '/graphql' })

app.listen({ port: 4000 }, () => console.log('🚀 http://localhost:4000' + server.graphqlPath))

// Hot Module Replacement
if (module.hot) {
  module.hot.accept()
  module.hot.dispose(() => console.log('Module disposed. '))
}
