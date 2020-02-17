import { RouteComponentProps, Router } from '@reach/router'
import React from 'react'

import { NavigationConstants } from './navigation-constants'
import { HomeScene } from 'scenes'

export const Routes = () => {
  const Home = (props: RouteComponentProps) => <HomeScene />

  return (
    <Router basepath='/'>
      <Home path={NavigationConstants.home} default />
    </Router>
  )
}
