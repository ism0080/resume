import React from 'react'

import { Footer, Header } from '@project/components'
import { LINKS, NAME, SUBTITLE } from '@project/components/data'

import less from './stack-navigation.less'

export const StackNavigation = ({ children }: StackNavigationProps) => (
  <div>
    <Header testID='header' title={NAME} subtitle={SUBTITLE} />
    <div className={less.children}>{children}</div>
    <Footer testID='footer' title={NAME} links={LINKS} />
  </div>
)
