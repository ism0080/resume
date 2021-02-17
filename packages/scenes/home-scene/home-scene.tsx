import React from 'react'
import { useQuery } from '@apollo/client'
import { Box, Center, Flex, Stack } from '@chakra-ui/react'

import { GET_ME_EXPERTISE, MeExpertiseData } from '@project/business/queries'
import { Jumbotron, Project, Section, StackNavigation } from '@project/components'
import { Button, Loader } from '@project/elements'
import { useBreakpoints } from '@project/hooks'
import { SvgRenderer } from '@project/res'
import { ErrorScene } from '@project/scenes'
import { theme } from '@project/web/theme'

import less from './home-scene.less'

export const HomeScene = () => {
  const { isMobile } = useBreakpoints()
  const { loading, error, data } = useQuery<MeExpertiseData>(GET_ME_EXPERTISE)

  if (loading) return <Loader testID='home-loader' color='#000' isCentered />
  if (error || !data) return <ErrorScene testID='home-error' text='An Error Occurred' />

  const magic = {
    width: {
      small: 150,
      big: 500
    },
    height: {
      small: 100,
      big: 300
    },
    div: {
      width: 900,
      padding: 10
    }
  }

  const resumeClickHandler = () => {
    window.open('assets/isaac_mackle_cv_web.pdf')
  }

  return (
    <StackNavigation>
      <Flex data-testid='home-scene' justify='center' direction='column' alignItems='center' w='100%'>
        <Jumbotron testID='jumbotron' title={data.me.name} subtitle={data.me.job} />
        <Section testID='section-spotlight' color='light'>
          <Center fontSize='3xl' paddingBottom='5'>
            Projects
          </Center>
          <Stack direction={['column', 'row']} spacing='16px' justify='center' wrap='wrap' align='center'>
            <Project
              imageUrl='https://s3-ap-southeast-2.amazonaws.com/graph.isaacmackle.com-images/lyric-project.png'
              imageAlt='Lyrc &bull; Random Song Lyric'
              title='Lyrc: Random Song Lyric'
              description='Simple use of Genius-API to search for an artist and return a random song lyric'
              websiteUrl='https://lyric.mackle.im'
              sourceCodeUrl='https://github.com/ism0080/random-song-lyric'
              testID='home-project-lyrc'
            />
            <Project
              imageUrl='https://s3-ap-southeast-2.amazonaws.com/graph.isaacmackle.com-images/comic-project.png'
              imageAlt='Comic Strip Readme'
              title='Comic Strip Readme &bull; GitHub Action'
              description='This GitHub Workflow updates your readme with the latest XKCD comic'
              websiteUrl='https://github.com/marketplace/actions/comic-strip-readme'
              sourceCodeUrl='https://github.com/ism0080/comicstrip-readme'
              testID='home-project-comic'
            />
          </Stack>
        </Section>
        <Section testID='section-skills' color='light'>
          <Center paddingBottom='5' fontSize='3xl'>
            Expertise
          </Center>
          <Center>
            <Stack
              direction={['column', 'row']}
              spacing='16px'
              justify='space-evenly'
              wrap='wrap'
              align='center'
              maxW={['100%', '80%', '50%', '40%']}
            >
              {data &&
                data.expertise.map(({ title, content }) => (
                  <Box paddingBottom='2' key={title}>
                    <strong>{title}</strong> - {content}
                  </Box>
                ))}
            </Stack>
          </Center>
        </Section>
        <Section testID='section-cv' color='dark' twoColumn>
          <SvgRenderer
            name='profile'
            width={isMobile ? magic.width.small : magic.width.big}
            height={isMobile ? magic.height.small : magic.height.big}
            fill={theme.colors.defaultAccent}
          />
          <Button testID='button-cv' title='View CV' onClick={resumeClickHandler} />
        </Section>
      </Flex>
    </StackNavigation>
  )
}
