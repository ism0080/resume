import React from 'react'
import { useQuery } from '@apollo/client'

import { MeExpertiseData, meExpertiseQuery } from '@project/business/queries'
import { Jumbotron, Section, StackNavigation } from '@project/components'
import { Button, Loader } from '@project/elements'
import { useBreakpoints } from '@project/hooks'
import { SvgRenderer } from '@project/res'
import { ErrorScene } from '@project/scenes'
import { theme } from '@project/web/theme'

import less from './home-scene.less'

export const HomeScene = () => {
  const { isMobile } = useBreakpoints()
  const { loading, error, data } = useQuery<MeExpertiseData>(meExpertiseQuery)

  if (loading) return <Loader testID='home-loader' color='#000' isCentered />
  if (error || !data) return <ErrorScene testID='home-error' text='An Error Occurred' />

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
        <Jumbotron testID='jumbotron' title={data.me.name} subtitle={data.me.job} />
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
            {data &&
              data.expertise.map(({ title, content }) => (
                <div key={title}>
                  <p>
                    <strong>{title}</strong> - {content}
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
          <Button testID='button-cv' title='View CV' onClick={resumeClickHandler} />
        </Section>
      </div>
    </StackNavigation>
  )
}
