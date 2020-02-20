import React from 'react'

import { Footer, Header } from 'components'

export const StackNavigation = ({ children }: StackNavigationProps) => (
  <div>
    <Header testID='header' title='Isaac Mackle' subtitle='Software Engineer' />
    {children}
    <Footer />
  </div>
)
