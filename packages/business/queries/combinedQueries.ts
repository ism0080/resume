import { gql } from '@apollo/client'

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
