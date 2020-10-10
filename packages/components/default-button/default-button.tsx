import React from 'react'

import { useBreakpoints } from '@project/hooks'
import { theme } from '@project/web/theme'

import less from './default-button.less'

export const DefaultButton = ({ title, onClick }: DefaultButtonProps) => {
  const { isMobile } = useBreakpoints()

  const width = {
    small: 120,
    big: 260
  }

  const height = {
    small: 55,
    big: 81
  }

  return (
    <button
      className={less.button}
      onClick={onClick}
      style={{
        background: theme.colors.defaultAccent,
        width: isMobile ? width.small : width.big,
        height: isMobile ? height.small : height.big
      }}
    >
      {title}
    </button>
  )
}
