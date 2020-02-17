import React from 'react'
import { render } from '@testing-library/react'

import { HomeScene } from '../home-scene'

test('should render home scene', () => {
  const { getByTestId } = render(<HomeScene />)

  expect(getByTestId('home-scene').textContent).toEqual('Hello World')
})
