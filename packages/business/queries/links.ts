import { gql } from '@apollo/client'

export const GET_LINKS = gql`
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
