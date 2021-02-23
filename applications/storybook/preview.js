import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import { chakraTheme } from '../web/theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}

export const decorators = [
  (Story) => (
    <ChakraProvider theme={chakraTheme} resetCSS>
      <Story />
    </ChakraProvider>
  )
]
