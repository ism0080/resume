import React from 'react'

import { useBreakpoints } from '@project/hooks'
import { theme } from '@project/web/theme'

import less from './section.less'

const size = {
  small: 100,
  big: 300
}

export const Section = ({ testID, height = size.big, color, children, twoColumn }: SectionProps) => {
  const { isMobile } = useBreakpoints()
  let _color = theme.colors.sectionDefault

  if (color) {
    _color = color === 'light' ? theme.colors.sectionLight : theme.colors.sectionDark
  }

  if (twoColumn) {
    return (
      <div
        className={less.sectionColumn}
        data-testid={`${testID}`}
        style={{ backgroundColor: _color, minHeight: isMobile ? size.small : height }}
      >
        {children}
      </div>
    )
  }

  return (
    <div className={less.section} data-testid={`${testID}`} style={{ backgroundColor: _color, minHeight: isMobile ? size.small : height }}>
      {children}
    </div>
  )
}
