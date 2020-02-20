import React from 'react'
import { render } from '@testing-library/react'

import { HomeScene } from '../home-scene'

xtest('should render home scene', () => {
  const { getByTestId } = render(<HomeScene />)

  expect(getByTestId('home-scene').textContent).toEqual('Hello World')
})
