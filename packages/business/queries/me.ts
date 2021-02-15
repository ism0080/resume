import { gql } from '@apollo/client'

export const GET_ME = gql`
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
