import { MockedResponse } from '@apollo/client/testing'

import { Expertise, GET_EXPERTISE, GET_LINKS, GET_ME, LinksQuery, MeQuery } from '@project/business/queries'

export const meQueryMock: MockedResponse<Record<string, MeQuery>>[] = [
  {
    request: {
      query: GET_ME
    },
    result: {
      data: {
        me: {
          name: 'Isaac Mackle',
          job: 'Software Engineer'
        }
      }
    }
  }
]

export const linksQueryMock: MockedResponse<Record<string, LinksQuery[]>>[] = [
  {
    request: {
      query: GET_LINKS
    },
    result: {
      data: {
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

export const expertiseQueryMock: MockedResponse<Record<string, Expertise[]>>[] = [
  {
    request: {
      query: GET_EXPERTISE
    },
    result: {
      data: {
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
