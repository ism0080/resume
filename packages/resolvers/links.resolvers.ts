import { AuthenticationError } from 'apollo-server-express'
import { IResolvers } from 'graphql-tools'

const links = [
  { title: 'LinkedIn', url: 'https://www.linkedin.com/in/ism0080' },
  { title: 'GitHub', url: 'https://github.com/ism0080' },
  { title: 'Email', url: 'mailto:isaac.mackle@gmail.com' }
]

const linksResolver: IResolvers = {
  Query: {
    links(parent, args, context, info): { title: string; url: string }[] {
      if (!context.authScope) throw new AuthenticationError('not authenticated')

      return links
    }
  }
}

export default linksResolver
