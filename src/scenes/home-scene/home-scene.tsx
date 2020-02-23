import React from 'react'

import { StackNavigation } from 'components'
import { SvgRenderer } from 'res'

import './home-scene.css'

export const HomeScene = () => (
  <StackNavigation>
    <div className='container' data-testid='home-scene'>
      <SvgRenderer name='comingSoon' width={500} height={300} />
    </div>
  </StackNavigation>
)
