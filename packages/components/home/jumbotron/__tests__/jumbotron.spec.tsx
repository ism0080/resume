import React from 'react'
import { Context as ResponsiveContext } from 'react-responsive'
import { render } from '@testing-library/react'

import { Jumbotron } from '../jumbotron'

describe('Jumbotron', () => {
  it('should render a jumbotron', () => {
    const { getByTestId } = render(<Jumbotron testID='test' title='title' />)

    expect(getByTestId('test')).not.toBeNull()
  })

  it('should render a jumbotron with a title', () => {
    const { getByTestId } = render(<Jumbotron testID='test' title='title' />)

    expect(getByTestId('test').textContent).toBe('title')
  })

  it('should render with a title', () => {
    const { getByTestId } = render(<Jumbotron testID='test' title='title' />)

    expect(getByTestId('test.p').textContent).toBe('title')
  })

  it('should render with a subtitle', () => {
    const { getByTestId } = render(<Jumbotron testID='test' title='title' subtitle='sub' />)

    expect(getByTestId('test.subtitle').textContent).toBe('sub')
  })

  it('should NOT render with a subtitle when not passed', () => {
    const { queryByTestId } = render(<Jumbotron testID='test' title='title' />)

    expect(queryByTestId('test.subtitle')).toBeNull()
  })

  it('should be height 100px when isMobile', () => {
    const { getByTestId } = render(
      <ResponsiveContext.Provider value={{ width: 400 }}>
        <Jumbotron testID='test' title='title' />
      </ResponsiveContext.Provider>
    )

    expect(getByTestId('test').style.minHeight).toBe('100px')
  })
})
