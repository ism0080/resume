import React from 'react'
import { useQuery } from '@apollo/client'

import { GET_ME_LINKS, MeLinksData } from '@project/business/queries'
import { Footer, Header } from '@project/components'
import { Loader } from '@project/elements'
import { ErrorScene } from '@project/scenes'

import less from './stack-navigation.less'

export const StackNavigation = ({ children }: StackNavigationProps) => {
  const { loading, error, data } = useQuery<MeLinksData>(GET_ME_LINKS)

  if (loading) return <Loader testID='stack-loader' color='#000' isCentered />
  if (error || !data) return <ErrorScene testID='stack-error' text='An Error Occurred' />

  return (
    <div>
      <Header testID='header' title={data.me.name} subtitle={data.me.job} />
      <div className={less.children}>{children}</div>
      <Footer testID='footer' title={data.me.name} links={data.links} />
    </div>
  )
}
