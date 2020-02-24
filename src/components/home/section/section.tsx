import React from 'react'

import { theme } from 'hooks'

import './section.css'

export const Section = ({ testID, height = 300, color, children }: SectionProps) => {
  let _color = theme.colors.sectionDefault
  if (color) {
    _color = color === 'light' ? theme.colors.sectionLight : theme.colors.sectionDark
  }

  return (
    <div className={'section'} data-testid={`${testID}.section`} style={{ backgroundColor: _color, height: height }}>
      {children}
    </div>
  )
}
