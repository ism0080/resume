import { ApolloServer, AuthenticationError } from 'apollo-server-micro'
import Cors from 'micro-cors'

import { resolvers } from './resolvers'
import { typeDefs } from './schemas'

const cors = Cors()
const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  context: ({ req }) => {
    if (req.headers.authorization !== process.env.AUTH) throw new AuthenticationError('Must provide Auth Header')
  }
})

export const config = {
  api: {
    bodyParser: false
  }
}

export default cors((req, res) => {
  if (req.method === 'OPTIONS') {
    res.end()

    return
  }

  return server.createHandler({ path: '/api' })(req, res)
})
