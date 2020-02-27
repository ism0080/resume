import React from 'react'

import { Footer, Header } from 'components'

import './stack-navigation.css'

const LINKS = [
  { title: 'LinkedIn', url: 'https://www.linkedin.com/in/ism0080' },
  { title: 'GitHub', url: 'https://github.com/ism0080' },
  { title: 'Email', url: 'mailto:isaac.mackle@gmail.com' },
]

const NAME = 'Isaac Mackle'

export const StackNavigation = ({ children }: StackNavigationProps) => (
  <div>
    <Header testID='header' title={NAME} subtitle='Software Engineer' />
    <div className='children'>{children}</div>
    <Footer testID='footer' title={NAME} links={LINKS} />
  </div>
)
