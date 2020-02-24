import React from 'react'
import { render } from '@testing-library/react'

import { HomeScene } from 'scenes'

describe('home-scene', () => {
  xtest('is rendered', () => {
    const container = render(<HomeScene />)

    expect(container.baseElement).not.toBeNull()
  })
})
