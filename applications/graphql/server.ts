/* eslint-disable no-console */
import { ApolloServer, makeExecutableSchema } from 'apollo-server-express'
import compression from 'compression'
import cors from 'cors'
import express from 'express'
import { GraphQLSchema } from 'graphql'
import depthLimit from 'graphql-depth-limit'

import { resolvers } from '@project/resolvers'
import { typeDefs } from '@project/schema'

require('dotenv').config()

const limit = 7

const schema: GraphQLSchema = makeExecutableSchema({ typeDefs, resolvers })

const app = express()
const server = new ApolloServer({
  schema,
  playground: true,
  validationRules: [depthLimit(limit)],
  context: ({ req }) => ({
    authScope: req.headers.authorization == process.env.AUTH ? true : false
  })
})

app.use(cors({ credentials: true, origin: 'http://localhost:8000' }))
app.use(compression())
server.applyMiddleware({ app, path: '/graphql' })

app.listen({ port: 4000 }, () => console.log('🚀 http://localhost:4000' + server.graphqlPath))
