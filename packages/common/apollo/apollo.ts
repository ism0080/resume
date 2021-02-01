import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

import { getApplicationConfig } from '@project/business/common/get-application-config'

const config = getApplicationConfig()

const httpLink = createHttpLink({
  uri: config.GRAPH_URL
})

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    authorization: config.GRAPH_AUTH
  }
}))

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})
