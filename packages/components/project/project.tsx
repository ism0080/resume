import React from 'react'
import { Badge, Box, Image, Link } from '@chakra-ui/react'

import { GAevent } from '@project/ga'

import less from './project.less'

export const Project = ({ imageUrl, imageAlt, websiteUrl, sourceCodeUrl, title, description, testID }: ProjectProps) => {
  const clickWebHandler = () => {
    GAevent('Projects', `Clicked on Website ${title}`, websiteUrl)
  }

  const clickSourceHandler = () => {
    GAevent('Projects', `Clicked on Source Code ${title}`, sourceCodeUrl)
  }

  return (
    <Box data-testid={testID} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image className={less.image} src={imageUrl} alt={imageAlt} />

      <Box p='6'>
        <Box d='flex' alignItems='baseline'>
          <Link data-testid={`${testID}-webisteUrl`} href={websiteUrl} isExternal={true} onClick={clickSourceHandler}>
            <Badge color='white' borderRadius='lg' px='2' bg='brand.accent'>
              Website
            </Badge>
          </Link>
          <Link data-testid={`${testID}-sourceCodeUrl`} href={sourceCodeUrl} isExternal={true} onClick={clickWebHandler}>
            <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase' ml='2'>
              View Source
            </Box>
          </Link>
        </Box>

        <Box data-testid={`${testID}-title`} mt='1' fontWeight='semibold' as='h4' lineHeight='tight' isTruncated>
          {title}
        </Box>

        <Box data-testid={`${testID}-description`}>{description}</Box>
      </Box>
    </Box>
  )
}
