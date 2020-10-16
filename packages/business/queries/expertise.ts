import { gql } from '@apollo/client'

export const expertiseQuery = gql`
  query {
    expertise {
      title
      content
    }
  }
`

export interface ExpertiseQueryInterface {
  title: string
  content: string
}
