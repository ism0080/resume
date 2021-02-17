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

const projects = [
  {
    imageUrl: 'https://s3-ap-southeast-2.amazonaws.com/graph.isaacmackle.com-images/lyric-project.png',
    imageAlt: 'Lyrc: Random Song Lyric',
    title: 'Lyrc &bull; Random Song Lyric',
    description: 'Simple use of Genius-API to search for an artist and return a random song lyric',
    websiteUrl: 'https://lyric.mackle.im',
    sourceCodeUrl: 'https://github.com/ism0080/random-song-lyric',
    testID: 'lyrc'
  },
  {
    imageUrl: 'https://s3-ap-southeast-2.amazonaws.com/graph.isaacmackle.com-images/comic-project.png',
    imageAlt: 'Comic Strip Readme',
    title: 'Comic Strip Readme &bull; GitHub Action',
    description: 'This GitHub Workflow updates your readme with the latest XKCD comic',
    websiteUrl: 'https://github.com/marketplace/actions/comic-strip-readme',
    sourceCodeUrl: 'https://github.com/ism0080/comicstrip-readme',
    testID: 'comic'
  }
]

export const resolvers = {
  Query: {
    expertise(parent, args, context, info) {
      return expertise
    },
    links(parent, args, context, info) {
      return links
    },
    me(parent, args, context, info) {
      return me
    },
    projects(parent, args, context, info) {
      return projects
    }
  }
}
