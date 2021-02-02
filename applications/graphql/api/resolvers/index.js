import { AuthenticationError } from 'apollo-server-micro'

const expertise = [
  { title: 'HTML5 | CSS3', content: 'LESS, CSS Modules' },
  { title: 'JavaScript', content: 'ES6, TypeScript, React, Redux' },
  { title: 'UI | Design', content: 'Storybook, Zeplin, Sketch, Illustrator' },
  { title: 'Testing', content: 'Unit Testing, Jest, React Testing Library' },
  { title: 'Version Control', content: 'Git, Github, Bitbucket, VSTS' },
  { title: 'Project Management', content: 'Agile / Scrum, Azure DevOps' }
]

const links = [
  { title: 'LinkedIn', url: 'https://www.linkedin.com/in/ism0080' },
  { title: 'GitHub', url: 'https://github.com/ism0080' },
  { title: 'Email', url: 'mailto:isaac.mackle@gmail.com' }
]

const me = { name: 'Isaac Mackle', job: 'Software Engineer' }

export const resolvers = {
  Query: {
    expertise(parent, args, context, info) {
      if (!context.authScope) throw new AuthenticationError('not authenticated')

      return expertise
    },
    links(parent, args, context, info) {
      if (!context.authScope) throw new AuthenticationError('not authenticated')

      return links
    },
    me(parent, args, context, info) {
      if (!context.authScope) throw new AuthenticationError('not authenticated')

      return me
    }
  }
}
