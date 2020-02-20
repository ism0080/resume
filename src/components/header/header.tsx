import React from 'react'
import { useBigNav, useBreakpoints } from 'hooks'

import './header.css'

export const Header = ({ testID, title, subtitle }: HeaderProps) => {
  const isBigNav = useBigNav()
  const { isMobile } = useBreakpoints()

  return (
    <div
      data-testid={testID}
      style={{
        padding: isBigNav && !isMobile ? '90px 10px' : '30px 10px',
        backgroundColor: isBigNav && !isMobile ? '' : '#fff',
      }}
      className={'navbar'}
    >
      <p
        style={{ fontSize: isBigNav && !isMobile ? 35 : 25, width: isBigNav && !isMobile ? '100%' : 150, margin: 0 }}
        className={'logo'}
      >
        {title}
        {isBigNav && !isMobile && <span>{subtitle}</span>}
      </p>
    </div>
  )
}

interface HeaderProps extends CommonProps {
  title: string
  subtitle?: string
}
