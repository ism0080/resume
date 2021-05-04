import React from 'react'
import { Center, Link, Stack } from '@chakra-ui/react'

import { GAevent } from '@project/ga'

export const Footer = ({ testID, title, links }: FooterProps) => {
  const clickHandler = (link: { title: string; url: string }) => {
    GAevent('Social Footer', `Clicked Social Link ${link.title}`, link.url)
  }

  return (
    <div data-testid={testID}>
      <Center paddingTop='5' paddingBottom='2'>
        {title}
      </Center>
      {links && (
        <Stack data-testid={`${testID}.links`} direction='row' spacing='24px' justify='center' paddingBottom='5'>
          {links.map((link) => (
            <Link
              data-testid={`${testID}.link.${link.title}`}
              key={link.title}
              href={link.url}
              isExternal={true}
              aria-label={link.title}
              onClick={() => clickHandler(link)}
            >
              {link.title}
            </Link>
          ))}
        </Stack>
      )}
    </div>
  )
}
