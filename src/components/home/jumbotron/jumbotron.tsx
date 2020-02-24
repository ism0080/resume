import React from 'react'

import { Section } from 'components'
import { theme } from 'hooks'

import './jumbotron.css'

export const Jumbotron = ({ testID, title, subtitle }: JumbotronProps) => (
  <Section testID={testID}>
    <p data-testid={`${testID}.p`} className='jumbotron' style={{ color: theme.colors.white }}>
      {title}
      {subtitle && <span>{subtitle}</span>}
    </p>
  </Section>
)
