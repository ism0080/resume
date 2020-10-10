import React from 'react'

import { DefaultButton, Jumbotron, Section, StackNavigation } from '@project/components'
import { EXPERTISE } from '@project/components/data'
import { useBreakpoints } from '@project/hooks'
import { SvgRenderer } from '@project/res'
import { theme } from '@project/web/theme'

import less from './home-scene.less'

export const HomeScene = () => {
  const { isMobile } = useBreakpoints()

  const magic = {
    width: {
      small: 150,
      big: 500
    },
    height: {
      small: 100,
      big: 300
    },
    div: {
      width: 900,
      padding: 10
    }
  }

  const resumeClickHandler = () => {
    window.open('assets/isaac_mackle_cv_web.pdf')
  }

  return (
    <StackNavigation>
      <div className={less.container} data-testid='home-scene'>
        <Jumbotron testID='jumbotron' title='Isaac Mackle' subtitle='Software Engineer' />
        <Section testID='section-skills' color='light'>
          <h1 style={{ textAlign: 'center' }}>Expertise</h1>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              width: isMobile ? undefined : magic.div.width,
              margin: '0 auto',
              padding: isMobile ? magic.div.padding : undefined
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
            width={isMobile ? magic.width.small : magic.width.big}
            height={isMobile ? magic.height.small : magic.height.big}
            fill={theme.colors.defaultAccent}
          />
          <DefaultButton testID='default-button-cv' title='View CV' onClick={resumeClickHandler} />
        </Section>
      </div>
    </StackNavigation>
  )
}
