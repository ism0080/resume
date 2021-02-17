import { gql } from '@apollo/client'

import { Expertise, LinksQuery, MeQuery, ProjectsQuery } from '.'

export const GET_ME_LINKS = gql`
  query {
    me {
      name
      job
    }
    links {
      title
      url
    }
  }
`

export const GET_ME_EXPERTISE = gql`
  query {
    me {
      name
      job
    }
    expertise {
      title
      content
    }
  }
`

export const GET_ME_EXPERTISE_PROJECTS = gql`
  query {
    me {
      name
      job
    }
    expertise {
      title
      content
    }
    projects {
      imageUrl
      imageAlt
      websiteUrl
      sourceCodeUrl
      title
      description
      testID
    }
  }
`

export interface MeLinksData {
  me: MeQuery
  links: [LinksQuery]
}

export interface MeExpertiseData {
  me: MeQuery
  expertise: [Expertise]
}

export interface MeExpertiseProjectsData {
  me: MeQuery
  expertise: [Expertise]
  projects: [ProjectsQuery]
}
