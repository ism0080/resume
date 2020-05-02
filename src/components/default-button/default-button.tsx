import React from 'react'

import { theme, useBreakpoints } from 'hooks'

import './default-button.css'

export const DefaultButton = ({ title, onClick }: DefaultButtonProps) => {
  const { isMobile } = useBreakpoints()

  return (
    <button
      className={'button'}
      onClick={onClick}
      style={{ background: theme.colors.defaultAccent, width: isMobile ? 120 : 260, height: isMobile ? 55 : 81 }}
    >
      {title}
    </button>
  )
}
