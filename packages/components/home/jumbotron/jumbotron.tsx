import React from 'react'

import { Section } from '@project/components'
import { SvgRenderer } from '@project/res'
import { theme } from '@project/web/theme'

import less from './jumbotron.less'

export const Jumbotron = ({ testID, title, subtitle }: JumbotronProps) => {
  return (
    <Section testID={testID}>
      <p data-testid={`${testID}.p`} className={less.jumbotron} style={{ color: theme.colors.white }}>
        {title}
        {subtitle && <span data-testid={`${testID}.subtitle`}>{subtitle}</span>}
      </p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <SvgRenderer name='gitHubIcon' fill={theme.colors.white} hyperlink='https://github.com/ism0080' label='GitHub' />
        <SvgRenderer
          name='linkedInIcon'
          fill={theme.colors.white}
          padding={20}
          hyperlink='https://www.linkedin.com/in/ism0080'
          label='LinkedIn'
        />
        <SvgRenderer name='emailIcon' fill={theme.colors.white} hyperlink='mailto:isaac.mackle@gmail.com' label='Email' />
      </div>
    </Section>
  )
}
