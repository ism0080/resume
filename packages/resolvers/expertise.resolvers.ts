import { IResolvers } from 'graphql-tools'

const expertiseResolver: IResolvers = {
  Query: {
    expertise(): { title: string; content: string }[] {
      return [
        { title: 'HTML5 | CSS3', content: 'LESS, CSS Modules' },
        { title: 'JavaScript', content: 'ES6, TypeScript, React, Redux' },
        { title: 'UI | Design', content: 'Storybook, Zeplin, Sketch, Illustrator' },
        { title: 'Testing', content: 'Unit Testing, Jest, React Testing Library' },
        { title: 'Version Control', content: 'Git, Github, Bitbucket, VSTS' },
        { title: 'Project Management', content: 'Agile / Scrum, Azure DevOps' }
      ]
    }
  }
}

export default expertiseResolver
