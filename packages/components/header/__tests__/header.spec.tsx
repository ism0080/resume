import React from 'react'
import { cleanup, render } from '@testing-library/react'

import { Header } from '@project/components'

describe('header', () => {
  afterEach(cleanup)

  it('should be a hidden nav by default', () => {
    const { getByTestId } = render(<Header testID='test' title='title' />)

    expect(getByTestId('test').style.height).toEqual('')
  })

  it('should render a title', () => {
    const { getByTestId } = render(<Header testID='test' title='title' />)

    expect(getByTestId('test').textContent).toEqual('title')
  })

  it('should render subtitle when supplied', () => {
    const { getByTestId } = render(<Header testID='test' title='title' subtitle='subtitle' />)

    expect(getByTestId('test.header-subtitle').textContent).toEqual('subtitle')
  })
})
