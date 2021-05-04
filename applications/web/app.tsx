import React, { useEffect } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import { ChakraProvider } from '@chakra-ui/react'

import { client } from '@project/apollo'
import { initGA } from '@project/ga'
import { ErrorScene, HomeScene } from '@project/scenes'

import { NavigationConstants } from './navigation-constants'
import { chakraTheme } from './theme'

const App = () => {
  useEffect(() => {
    initGA()
  }, [])

  return (
    <ChakraProvider theme={chakraTheme}>
      <ApolloProvider client={client}>
        <Router>
          <Switch>
            <Route exact path={NavigationConstants.home} component={HomeScene} />
            <Route path='*'>
              <ErrorScene testID='route-error' text='Page Not Found' />
            </Route>
          </Switch>
        </Router>
      </ApolloProvider>
    </ChakraProvider>
  )
}

render(<App />, document.getElementById('root'))
