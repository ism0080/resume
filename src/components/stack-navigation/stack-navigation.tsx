import React from 'react'

import { Footer, Header } from 'components'

import './stack-navigation.css'

export const StackNavigation = ({ children }: StackNavigationProps) => (
  <div>
    <Header testID='header' title='Isaac Mackle' subtitle='Software Engineer' />
    <div className='children'>{children}</div>
    <Footer />
  </div>
)
