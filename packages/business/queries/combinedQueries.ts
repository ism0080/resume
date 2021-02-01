import { gql } from '@apollo/client'

import { LinksQuery, MeQuery } from '.'

export const meLinksQuery = gql`
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
export interface MeLinksData {
  me: MeQuery
  links: [LinksQuery]
}
