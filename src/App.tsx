import React from 'react'
import { render } from 'react-dom'

import { theme } from 'hooks'

import './App.css'

import { Routes } from 'components'

const App = () => (
  <div className='page-container' style={{ backgroundColor: theme.colors.defaultBackground }}>
    <Routes />
  </div>
)

render(<App />, document.getElementById('root'))
