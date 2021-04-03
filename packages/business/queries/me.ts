import { gql } from '@apollo/client'

export const GET_ME = gql`
  query {
    me {
      name
      job
      techStack
      about
    }
  }
`

export interface MeQuery {
  name: string
  job: string
  techStack: string[]
  about: string
}
