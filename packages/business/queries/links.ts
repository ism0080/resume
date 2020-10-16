import { gql } from '@apollo/client'

export const linksQuery = gql`
  query {
    links {
      title
      url
    }
  }
`

export interface LinksQueryInterface {
  title: string
  url: string
}
