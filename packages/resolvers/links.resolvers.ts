import { IResolvers } from 'graphql-tools'

const linksResolver: IResolvers = {
  Query: {
    links(): { title: string; url: string }[] {
      return [
        { title: 'LinkedIn', url: 'https://www.linkedin.com/in/ism0080' },
        { title: 'GitHub', url: 'https://github.com/ism0080' },
        { title: 'Email', url: 'mailto:isaac.mackle@gmail.com' }
      ]
    }
  }
}

export default linksResolver
