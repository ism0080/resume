import React from 'react'
import { render } from '@testing-library/react'

import { Section } from '../'

describe('Section', () => {
  it('should render a section with children', () => {
    const { getByTestId } = render(<Section testID='test' children={MockChildren} />)
    expect(getByTestId('test')).not.toBeNull()
  })

  it('should be backgroundColor sectionDefault by default', () => {
    const { getByTestId } = render(<Section testID='test' children={MockChildren} />)
    expect(getByTestId('test').style.backgroundColor).toEqual('rgb(43, 49, 55)')
  })

  it('should be backgroundColor sectionLight when color=light', () => {
    const { getByTestId } = render(<Section testID='test' color='light' children={MockChildren} />)
    expect(getByTestId('test').style.backgroundColor).toEqual('rgb(255, 255, 255)')
  })

  it('should be backgroundColor sectionDark when color=dark', () => {
    const { getByTestId } = render(<Section testID='test' color='dark' children={MockChildren} />)
    expect(getByTestId('test').style.backgroundColor).toEqual('rgb(247, 247, 247)')
  })

  it('should be height=300 by default', () => {
    const { getByTestId } = render(<Section testID='test' children={MockChildren} />)
    expect(getByTestId('test').style.height).toEqual('300px')
  })

  it('should render the correct height passed in', () => {
    const { getByTestId } = render(<Section testID='test' height={600} children={MockChildren} />)
    expect(getByTestId('test').style.height).toEqual('600px')
  })
})

// MOCK DATA //
const MockChildren = <div></div>
