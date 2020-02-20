import React from 'react'

import { StackNavigation } from 'components'
import './home-scene.css'
import { useBreakpoints } from 'hooks'

export const HomeScene = () => {
  const { isMobile } = useBreakpoints()

  return (
    <StackNavigation>
      <h1 data-testid='home-scene' className='container' style={{ marginTop: isMobile ? 85 : 280 }}>
        Hello World
      </h1>
    </StackNavigation>
  )
}
