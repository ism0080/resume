import React from 'react'

import { useBigNav } from '@project/hooks'
import { theme } from '@project/web/theme'

import less from './header.less'

export const Header = ({ testID, title, subtitle }: HeaderProps) => {
  const magic = {
    nav: 5,
    height: 79
  }

  const isBigNav = useBigNav(magic.nav)

  return (
    <div
      data-testid={testID}
      style={{
        height: isBigNav ? 0 : magic.height,
        backgroundColor: theme.colors.defaultAccent
      }}
      className={less.navbar}
    >
      <p data-testid={`${testID}.header-text`} className={less.logo} style={{ color: theme.colors.textLight }}>
        {title}
        <span data-testid={`${testID}.header-subtitle`}>{subtitle}</span>
      </p>
    </div>
  )
}
