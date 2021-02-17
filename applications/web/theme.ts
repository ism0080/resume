import { extendTheme } from '@chakra-ui/react'

export const theme = {
  colors: {
    black: '#000',
    defaultAccent: '#005b96',
    defaultBackground: '#fff',
    textDefault: '#000',
    textLight: '#fff',
    sectionDefault: '#2b3137',
    sectionLight: '#fff',
    sectionDark: '#f7f7f7',
    white: '#fff'
  }
}

export const chakraTheme = extendTheme({
  colors: {
    brand: {
      accent: '#005b96'
    },
    section: {
      default: '#2b3137',
      light: '#fff',
      dark: '#f7f7f7'
    }
  }
})
