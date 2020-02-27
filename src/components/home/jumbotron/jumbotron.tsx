import React from 'react'

import { Section } from 'components'
import { theme, useBreakpoints } from 'hooks'

import './jumbotron.css'

export const Jumbotron = ({ testID, title, subtitle }: JumbotronProps) => {
  const { isMobile } = useBreakpoints()
  return (
    <Section testID={testID} height={isMobile ? 200 : 300}>
      <p data-testid={`${testID}.p`} className='jumbotron' style={{ color: theme.colors.white }}>
        {title}
        {subtitle && <span data-testid={`${testID}.subtitle`}>{subtitle}</span>}
      </p>
    </Section>
  )
}
