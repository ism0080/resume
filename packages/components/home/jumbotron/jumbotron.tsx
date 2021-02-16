import React from 'react'
import { Box, Center, Flex } from '@chakra-ui/react'

import { Section } from '@project/components'
import { SvgRenderer } from '@project/res'
import { theme } from '@project/web/theme'

import less from './jumbotron.less'

export const Jumbotron = ({ testID, title, subtitle }: JumbotronProps) => {
  return (
    <Section testID={testID}>
      <Flex justify='center' align='center' direction='column' paddingTop='10'>
        <Center fontSize='4xl' data-testid={`${testID}.p`} color='white'>
          {title}
        </Center>
        {subtitle && (
          <Center fontSize='4xl' fontWeight='light' data-testid={`${testID}.subtitle`} color='white'>
            {subtitle}
          </Center>
        )}
        <Box d='flex' alignItems='baseline' flex='1' paddingTop='10'>
          <SvgRenderer name='gitHubIcon' fill={theme.colors.white} hyperlink='https://github.com/ism0080' label='GitHub' />
          <SvgRenderer
            name='linkedInIcon'
            fill={theme.colors.white}
            padding={20}
            hyperlink='https://www.linkedin.com/in/ism0080'
            label='LinkedIn'
          />
          <SvgRenderer name='emailIcon' fill={theme.colors.white} hyperlink='mailto:isaac.mackle@gmail.com' label='Email' />
        </Box>
      </Flex>
    </Section>
  )
}
