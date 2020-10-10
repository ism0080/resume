import React from 'react'
import { render } from '@testing-library/react'

import { HomeScene } from '../'

describe('home-scene', () => {
  test.skip('is rendered', () => {
    const container = render(<HomeScene />)

    expect(container.baseElement).not.toBeNull()
  })
})
