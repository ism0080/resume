import React from 'react'
import { render } from 'react-dom'

import './index.css'

import { Routes } from 'components'
import { useBreakpoints } from './hooks'

const App = () => {
  const { isMobile } = useBreakpoints()

  return (
    <div className='page-container' style={{ marginTop: isMobile ? 85 : 240 }}>
      <Routes />
    </div>
  )
}

render(<App />, document.getElementById('root'))
