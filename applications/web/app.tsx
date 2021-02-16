import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import { ChakraProvider } from '@chakra-ui/react'

import { client } from '@project/apollo'
import { ErrorScene, HomeScene } from '@project/scenes'

import less from './global.less'
import { NavigationConstants } from './navigation-constants'
import { chakraTheme, theme } from './theme'

const App = () => (
  <div className={less['page-container']} style={{ backgroundColor: theme.colors.defaultBackground }}>
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
  </div>
)

render(<App />, document.getElementById('root'))
