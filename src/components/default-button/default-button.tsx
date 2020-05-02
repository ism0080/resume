import React from 'react'

import { theme } from 'hooks'

import './default-button.css'

export const DefaultButton = ({ title, onClick }: DefaultButtonProps) => (
  <button onClick={onClick} style={{ background: theme.colors.defaultAccent }}>
    {title}
  </button>
)
