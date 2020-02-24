import React from 'react'

import { theme, useBigNav } from 'hooks'

import './header.css'

export const Header = ({ testID, title, subtitle }: HeaderProps) => {
  const isBigNav = useBigNav(5)

  return (
    <div
      data-testid={testID}
      style={{
        height: isBigNav ? 0 : 79,
        backgroundColor: theme.colors.defaultAccent,
      }}
      className={'navbar'}
    >
      <p data-testid={`${testID}.header-text`} className={'logo'} style={{ color: theme.colors.textLight }}>
        {title}
        <span data-testid={`${testID}.header-subtitle`}>{subtitle}</span>
      </p>
    </div>
  )
}
