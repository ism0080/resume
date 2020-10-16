import { AuthenticationError } from 'apollo-server-express'
import { IResolvers } from 'graphql-tools'

const expertise = [
  { title: 'HTML5 | CSS3', content: 'LESS, CSS Modules' },
  { title: 'JavaScript', content: 'ES6, TypeScript, React, Redux' },
  { title: 'UI | Design', content: 'Storybook, Zeplin, Sketch, Illustrator' },
  { title: 'Testing', content: 'Unit Testing, Jest, React Testing Library' },
  { title: 'Version Control', content: 'Git, Github, Bitbucket, VSTS' },
  { title: 'Project Management', content: 'Agile / Scrum, Azure DevOps' }
]

const expertiseResolver: IResolvers = {
  Query: {
    expertise(parent, args, context, info): { title: string; content: string }[] {
      if (context.authScope) throw new AuthenticationError('not authenticated')

      return expertise
    }
  }
}

export default expertiseResolver
