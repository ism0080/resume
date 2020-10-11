import { loadFilesSync } from '@graphql-tools/load-files'
import { mergeTypeDefs } from '@graphql-tools/merge'

const typesArray = loadFilesSync(`${__dirname}/**/*.graphql`)

export const typeDefs = mergeTypeDefs(typesArray)
