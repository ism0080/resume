import { MockedResponse } from '@apollo/client/testing'

import {
  Expertise,
  GET_ME_EXPERTISE,
  GET_ME_EXPERTISE_PROJECTS,
  GET_ME_LINKS,
  LinksQuery,
  MeQuery,
  ProjectsQuery
} from '@project/business/queries'

export const meExpertiseQueryMock: MockedResponse<Record<string, MeQuery | Expertise[]>>[] = [
  {
    request: {
      query: GET_ME_EXPERTISE
    },
    result: {
      data: {
        me: {
          name: 'Isaac Mackle',
          job: 'Software Engineer',
          techStack: ['React', '.Net Core', 'AWS'],
          about: 'About Me'
        },
        expertise: [
          {
            title: 'HTML5 | CSS3',
            content: 'LESS, CSS Modules'
          },
          {
            title: 'JavaScript',
            content: 'ES6, TypeScript, React, Redux'
          },
          {
            title: 'UI | Design',
            content: 'Storybook, Zeplin, Sketch, Illustrator'
          },
          {
            title: 'Testing',
            content: 'Unit Testing, Jest, React Testing Library'
          },
          {
            title: 'Version Control',
            content: 'Git, Github, Bitbucket, VSTS'
          },
          {
            title: 'Project Management',
            content: 'Agile / Scrum, Azure DevOps'
          }
        ]
      }
    }
  }
]

export const meLinksQueryMock: MockedResponse<Record<string, MeQuery | LinksQuery[]>>[] = [
  {
    request: {
      query: GET_ME_LINKS
    },
    result: {
      data: {
        me: {
          name: 'Isaac Mackle',
          job: 'Software Engineer',
          techStack: ['React', '.Net Core', 'AWS'],
          about: 'About Me'
        },
        links: [
          {
            title: 'LinkedIn',
            url: 'https://www.linkedin.com/in/ism0080'
          },
          {
            title: 'GitHub',
            url: 'https://github.com/ism0080'
          },
          {
            title: 'Email',
            url: 'mailto:isaac.mackle@gmail.com'
          }
        ]
      }
    }
  }
]

export const meExpertiseProjectsQueryMock: MockedResponse<Record<string, MeQuery | Expertise[] | ProjectsQuery[]>>[] = [
  {
    request: {
      query: GET_ME_EXPERTISE_PROJECTS
    },
    result: {
      data: {
        me: {
          name: 'Isaac Mackle',
          job: 'Software Engineer',
          techStack: ['React', '.Net Core', 'AWS'],
          about: 'About Me'
        },
        expertise: [
          {
            title: 'HTML5 | CSS3',
            content: 'LESS, CSS Modules'
          },
          {
            title: 'JavaScript',
            content: 'ES6, TypeScript, React, Redux'
          },
          {
            title: 'UI | Design',
            content: 'Storybook, Zeplin, Sketch, Illustrator'
          },
          {
            title: 'Testing',
            content: 'Unit Testing, Jest, React Testing Library'
          },
          {
            title: 'Version Control',
            content: 'Git, Github, Bitbucket, VSTS'
          },
          {
            title: 'Project Management',
            content: 'Agile / Scrum, Azure DevOps'
          }
        ],
        projects: [
          {
            imageUrl: 'https://s3-ap-southeast-2.amazonaws.com/graph.isaacmackle.com-images/lyric-project.png',
            imageAlt: 'Lyrc: Random Song Lyric',
            websiteUrl: 'https://lyric.mackle.im',
            sourceCodeUrl: 'https://github.com/ism0080/random-song-lyric',
            title: 'Lyrc &bull; Random Song Lyric',
            description: 'Simple use of Genius-API to search for an artist and return a random song lyric',
            testID: 'lyrc'
          },
          {
            imageUrl: 'https://s3-ap-southeast-2.amazonaws.com/graph.isaacmackle.com-images/comic-project.png',
            imageAlt: 'Comic Strip Readme',
            websiteUrl: 'https://github.com/marketplace/actions/comic-strip-readme',
            sourceCodeUrl: 'https://github.com/ism0080/comicstrip-readme',
            title: 'Comic Strip Readme &bull; GitHub Action',
            description: 'This GitHub Workflow updates your readme with the latest XKCD comic',
            testID: 'comic'
          }
        ]
      }
    }
  }
]
