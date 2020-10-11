import { loadFilesSync } from '@graphql-tools/load-files'
import { mergeResolvers } from '@graphql-tools/merge'

const resolversArray = loadFilesSync(`${__dirname}/**/*.resolvers.*`)

export const resolvers = mergeResolvers(resolversArray)
