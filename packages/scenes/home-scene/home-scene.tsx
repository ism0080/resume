import React from 'react'
import { useQuery } from '@apollo/client'
import { Box, Center, Flex, List, ListItem, Stack } from '@chakra-ui/react'

import { GET_ME_EXPERTISE_PROJECTS, MeExpertiseProjectsData } from '@project/business/queries'
import { Jumbotron, Project, Section, StackNavigation } from '@project/components'
import { Button, Loader } from '@project/elements'
import { useBreakpoints } from '@project/hooks'
import { SvgRenderer } from '@project/res'
import { ErrorScene } from '@project/scenes'
import { theme } from '@project/web/theme'

export const HomeScene = () => {
  const { isMobile } = useBreakpoints()
  const { loading, error, data } = useQuery<MeExpertiseProjectsData>(GET_ME_EXPERTISE_PROJECTS)

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
        <Jumbotron testID='jumbotron' title={data.me.name} subtitle={data.me.job} techStack={data.me.techStack} />
        <Section testID='section-spotlight' color='light'>
          <Center fontSize='3xl' paddingBottom='5'>
            About
          </Center>
          <Center paddingBottom='5'>
            <Box w='1000px' p='0 20px'>
              {data.me.about}
            </Box>
          </Center>
          <Center fontSize='3xl' paddingBottom='5'>
            Projects
          </Center>
          <Center>
            <Stack direction={['column', 'column', 'row']} spacing='16px' justify='center' wrap='wrap' align='center' w={['90%', '100%']}>
              {data && data.projects.map((props) => <Project key={props.testID} {...props} />)}
            </Stack>
          </Center>
        </Section>
        <Section testID='section-skills' color='light'>
          <Center paddingBottom='5' fontSize='3xl'>
            Expertise
          </Center>
          <Center>
            <Stack
              direction={['column', 'column', 'row']}
              spacing='16px'
              justify='space-evenly'
              wrap='wrap'
              align='center'
              maxW={['90%', '80%', '50%', '40%']}
            >
              <List>
                {data &&
                  data.expertise.map(({ title, content }) => (
                    <ListItem paddingBottom='2' key={title}>
                      <strong>{title}</strong> - {content}
                    </ListItem>
                  ))}
              </List>
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
