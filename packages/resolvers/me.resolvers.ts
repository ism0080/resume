import { AuthenticationError } from 'apollo-server-express'
import { IResolvers } from 'graphql-tools'

const me = { name: 'Isaac Mackle', job: 'Software Engineer' }

const meResolver: IResolvers = {
  Query: {
    me(parent, args, context, info): { name: string; job: string } {
      if (!context.authScope) throw new AuthenticationError('not authenticated')

      return me
    }
  }
}

export default meResolver
