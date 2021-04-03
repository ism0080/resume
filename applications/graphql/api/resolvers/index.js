const expertise = [
  { title: 'HTML5 | CSS', content: 'LESS, CSS Modules' },
  { title: 'Server-Side', content: 'NodeJS, C#' },
  { title: 'JavaScript', content: 'ES6, React, TypeScript, GraphQL, Apollo, NextJS' },
  { title: 'AWS', content: 'S3, CloudFormation, Lambda, DynamoDB, Kinesis Firehose, SQS, SNS' },
  { title: 'C#', content: '.Net Core, API' },
  { title: 'Other', content: 'CI/CD Pipelines, Docker' },
  { title: 'UI | Design', content: 'Storybook, Zeplin, Sketch, Illustrator, Figma' },
  { title: 'Testing', content: 'Jest, React Testing Library, XUnit/NUnit' },
  { title: 'Version Control', content: 'Git, Github, Bitbucket, Azure DevOps' },
  { title: 'Project Management', content: 'Agile / Scrum, Azure DevOps, Confluence' }
]

const links = [
  { title: 'LinkedIn', url: 'https://www.linkedin.com/in/ism0080' },
  { title: 'GitHub', url: 'https://github.com/ism0080' },
  { title: 'Email', url: 'mailto:isaac.mackle@gmail.com' }
]

const me = {
  name: 'Isaac Mackle',
  job: 'Software Engineer',
  techStack: ['React', '.Net Core', 'AWS'],
  about:
    "I'm always seeking new opportunities to further my knowledge and grow as a professional in my field of work. \
     I am a friendly person who works well with others, whilst also being able to perform efficiently on my own. \
     I have experience in multiple programming languages which allows me to quickly grasp any new programming language"
}

const projects = [
  {
    imageUrl: 'https://s3-ap-southeast-2.amazonaws.com/graph.isaacmackle.com-images/lyric-project.png',
    imageAlt: 'Lyrc: Random Song Lyric',
    title: 'Lyrc • Random Song Lyric',
    description: 'Simple use of Genius-API to search for an artist and return a random song lyric',
    websiteUrl: 'https://lyric.mackle.im',
    sourceCodeUrl: 'https://github.com/ism0080/random-song-lyric',
    testID: 'lyrc'
  },
  {
    imageUrl: 'https://s3-ap-southeast-2.amazonaws.com/graph.isaacmackle.com-images/comic-project.png',
    imageAlt: 'Comic Strip Readme',
    title: 'Comic Strip Readme • GitHub Action',
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
