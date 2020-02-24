import React from 'react'

import { Jumbotron, Section, StackNavigation } from 'components'
import { SvgRenderer } from 'res'
import { theme } from 'hooks'

import './home-scene.css'

export const HomeScene = () => (
  <StackNavigation>
    <div className='container' data-testid='home-scene'>
      <Jumbotron testID='jumbotron' title='Isaac Mackle' subtitle='Software Engineer' />
      <Section testID='svg-coming-soon' color='dark'>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <SvgRenderer name='comingSoon' width={500} height={200} fill={theme.colors.defaultAccent} />
        </div>
      </Section>
    </div>
  </StackNavigation>
)
