import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { HomeScene } from '@project/scenes'

import less from './global.less'
import { NavigationConstants } from './navigation-constants'
import { theme } from './theme'

const App = () => (
  <div className={less['page-container']} style={{ backgroundColor: theme.colors.defaultBackground }}>
    <Router>
      <Switch>
        <Route path={NavigationConstants.home} component={HomeScene} />
      </Switch>
    </Router>
  </div>
)

render(<App />, document.getElementById('root'))
