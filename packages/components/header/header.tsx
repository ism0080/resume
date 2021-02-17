import React from 'react'
import { Box, Flex, Spacer } from '@chakra-ui/react'

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
    <Flex
      data-testid={testID}
      h={isBigNav ? 0 : magic.height}
      bg='brand.accent'
      className={less.navbar}
      alignItems='center'
      padding={['0 10px', '0 20px']}
    >
      <Box fontSize={['16px', '25px']} data-testid={`${testID}.header-text`} color='white'>
        {title}
      </Box>
      <Spacer />
      <Box fontSize={['16px', '25px']} data-testid={`${testID}.header-subtitle`} fontWeight='thin' color='white'>
        {subtitle}
      </Box>
    </Flex>
  )
}
