import { gql } from '@apollo/client'

export const GET_PROJECTS = gql`
  query {
    projects {
      imageUrl
      imageAlt
      websiteUrl
      sourceCodeUrl
      title
      description
      testID
    }
  }
`

export interface ProjectsQuery {
  testID: string
  imageUrl: string
  imageAlt: string
  websiteUrl: string
  sourceCodeUrl: string
  title: string
  description: string
}
