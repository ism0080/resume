import React from 'react'

import { StackNavigation } from 'components'
import { SvgRenderer } from 'res'

import './home-scene.css'

export const HomeScene = () => (
  <StackNavigation>
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: 20 }}>
      <SvgRenderer name='comingSoon' width={500} height={300} />
    </div>
  </StackNavigation>
)
