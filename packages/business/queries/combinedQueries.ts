import { gql } from '@apollo/client'

import { Expertise, LinksQuery, MeQuery } from '.'

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

export interface MeLinksData {
  me: MeQuery
  links: [LinksQuery]
}

export interface MeExpertiseData {
  me: MeQuery
  expertise: [Expertise]
}
