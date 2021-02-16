import React from 'react'
import { Badge, Box, Image, Link } from '@chakra-ui/react'

export const Project = ({ imageUrl, imageAlt, websiteUrl, sourceCodeUrl, title, description, testID }: ProjectProps) => (
  <Box data-testid={testID} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
    <Image src={imageUrl} alt={imageAlt} />

    <Box p='6'>
      <Box d='flex' alignItems='baseline'>
        <Link href={websiteUrl} isExternal={true}>
          <Badge color='white' borderRadius='lg' px='2' bg='brand.accent'>
            Website
          </Badge>
        </Link>
        <Link href={sourceCodeUrl} isExternal={true}>
          <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase' ml='2'>
            View Source
          </Box>
        </Link>
      </Box>

      <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' isTruncated>
        {title}
      </Box>

      <Box>{description}</Box>
    </Box>
  </Box>
)
