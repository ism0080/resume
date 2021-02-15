import { MockedResponse } from '@apollo/client/testing'

import { Expertise, GET_ME_EXPERTISE, GET_ME_LINKS, LinksQuery, MeQuery } from '@project/business/queries'

export const meExpertiseQueryMock: MockedResponse<Record<string, MeQuery | Expertise[]>>[] = [
  {
    request: {
      query: GET_ME_EXPERTISE
    },
    result: {
      data: {
        me: {
          name: 'Isaac Mackle',
          job: 'Software Engineer'
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
          job: 'Software Engineer'
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
