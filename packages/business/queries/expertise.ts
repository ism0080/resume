import { gql } from '@apollo/client'

export const expertiseQuery = gql`
  query {
    expertise {
      title
      content
    }
  }
`

export interface Expertise {
  title: string
  content: string
}

export interface ExpertiseQuery {
  expertise: [Expertise]
}
