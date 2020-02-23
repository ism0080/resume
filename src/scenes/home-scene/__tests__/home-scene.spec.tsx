import React from 'react'
import { render } from '@testing-library/react'

import { HomeScene } from '../home-scene'

describe('home-scene', () => {
  test('is rendered', () => {
    const container = render(<HomeScene />)

    expect(container.baseElement).not.toBeNull()
  })
})
