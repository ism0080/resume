import React from 'react'
import { motion } from 'framer-motion'

import { useBreakpoints } from '@project/hooks'
import { theme } from '@project/web/theme'

import less from './button.less'

export const Button = ({ title, onClick }: ButtonProps) => {
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
    <motion.button
      className={less.button}
      onClick={onClick}
      style={{
        background: theme.colors.defaultAccent,
        width: isMobile ? width.small : width.big,
        height: isMobile ? height.small : height.big
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {title}
    </motion.button>
  )
}
