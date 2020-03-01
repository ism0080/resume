import React from 'react'

import { Footer, Header } from 'components'
import { NAME, LINKS, SUBTITLE } from 'components/data'

import './stack-navigation.css'

export const StackNavigation = ({ children }: StackNavigationProps) => (
  <div>
    <Header testID='header' title={NAME} subtitle={SUBTITLE} />
    <div className='children'>{children}</div>
    <Footer testID='footer' title={NAME} links={LINKS} />
  </div>
)
