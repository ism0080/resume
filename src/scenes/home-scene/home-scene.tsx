import React from 'react'
// import { navigate } from '@reach/router'

import { DefaultButton, Jumbotron, Section, StackNavigation } from 'components'
import { SvgRenderer } from 'res'
import { theme } from 'hooks'
// import { NavigationConstants } from 'components/navigation'

import './home-scene.css'

export const HomeScene = () => {
  const resumeClickHandler = () => {
    window.open('isaac_mackle_cv_web.pdf')
  }

  return (
    <StackNavigation>
      <div className='container' data-testid='home-scene'>
        <Jumbotron testID='jumbotron' title='Isaac Mackle' subtitle='Software Engineer' />
        <Section testID='section-cv' color='dark' twoColumn>
          <SvgRenderer name='profile' width={500} height={300} fill={theme.colors.defaultAccent} />
          <DefaultButton testID='default-button-cv' title='View CV' onClick={resumeClickHandler} />
        </Section>
      </div>
    </StackNavigation>
  )
}
