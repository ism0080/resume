import { gql } from '@apollo/client'

export const linksQuery = gql`
  query {
    links {
      title
      url
    }
  }
`

export interface LinksQuery {
  title: string
  url: string
}
