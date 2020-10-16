import { gql } from '@apollo/client'

export const meQuery = gql`
  query {
    me {
      name
      job
    }
  }
`

export interface MeQuery {
  name: string
  job: string
}
