import { IResolvers } from 'graphql-tools'

const meResolver: IResolvers = {
  Query: {
    me(): { name: string; job: string } {
      return { name: 'Isaac Mackle', job: 'Software Engineer' }
    }
  }
}

export default meResolver
