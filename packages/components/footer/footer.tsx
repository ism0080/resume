import React from 'react'
import { Center, Link, Stack } from '@chakra-ui/react'

export const Footer = ({ testID, title, links }: FooterProps) => (
  <div data-testid={testID}>
    <Center paddingTop='5' paddingBottom='2'>
      {title}
    </Center>
    {links && (
      <Stack data-testid={`${testID}.links`} direction='row' spacing='24px' justify='center' paddingBottom='5'>
        {links.map((link) => (
          <Link data-testid={`${testID}.link.${link.title}`} key={link.title} href={link.url} isExternal={true} aria-label={link.title}>
            {link.title}
          </Link>
        ))}
      </Stack>
    )}
  </div>
)
