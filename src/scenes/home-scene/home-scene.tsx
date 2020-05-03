import React from 'react'

import { DefaultButton, Jumbotron, Section, StackNavigation } from 'components'
import { EXPERTISE } from 'components/data'
import { SvgRenderer } from 'res'
import { theme, useBreakpoints } from 'hooks'

import './home-scene.css'

export const HomeScene = () => {
  const { isMobile } = useBreakpoints()

  const resumeClickHandler = () => {
    window.open('isaac_mackle_cv_web.pdf')
  }

  return (
    <StackNavigation>
      <div className='container' data-testid='home-scene'>
        <Jumbotron testID='jumbotron' title='Isaac Mackle' subtitle='Software Engineer' />
        <Section testID='section-skills' color='light'>
          <h1 style={{ textAlign: 'center' }}>Expertise</h1>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              width: isMobile ? undefined : 900,
              margin: '0 auto',
              padding: isMobile ? 10 : undefined,
            }}
          >
            {EXPERTISE.map((skill) => (
              <div key={skill.title}>
                <p>
                  <strong>{skill.title}</strong> - {skill.content}
                </p>
              </div>
            ))}
          </div>
        </Section>
        <Section testID='section-cv' color='dark' twoColumn>
          <SvgRenderer
            name='profile'
            width={isMobile ? 150 : 500}
            height={isMobile ? 100 : 300}
            fill={theme.colors.defaultAccent}
          />
          <DefaultButton testID='default-button-cv' title='View CV' onClick={resumeClickHandler} />
        </Section>
      </div>
    </StackNavigation>
  )
}
