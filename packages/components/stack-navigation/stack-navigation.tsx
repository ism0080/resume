import React from 'react'
import { useQuery } from '@apollo/client'

import { meLinksQuery } from '@project/business/queries'
import { Footer, Header } from '@project/components'
import { Loader } from '@project/elements'

import less from './stack-navigation.less'

export const StackNavigation = ({ children }: StackNavigationProps) => {
  const { loading, error, data } = useQuery(meLinksQuery)

  if (loading) return <Loader testID='stack-loader' />
  if (error) return <p>Error :(</p>

  return (
    <div>
      <Header testID='header' title={data.me.name} subtitle={data.me.job} />
      <div className={less.children}>{children}</div>
      <Footer testID='footer' title={data.me.name} links={data.links} />
    </div>
  )
}
