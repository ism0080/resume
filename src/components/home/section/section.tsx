import React from 'react'

import { theme } from 'hooks'

import './section.css'

export const Section = ({ testID, height = 300, color, children, twoColumn }: SectionProps) => {
  let _color = theme.colors.sectionDefault
  if (color) {
    _color = color === 'light' ? theme.colors.sectionLight : theme.colors.sectionDark
  }

  if (twoColumn) {
    return (
      <div className={'sectionColumn'} data-testid={`${testID}`} style={{ backgroundColor: _color, minHeight: height }}>
        {children}
      </div>
    )
  }

  return (
    <div className={'section'} data-testid={`${testID}`} style={{ backgroundColor: _color, minHeight: height }}>
      {children}
    </div>
  )
}
