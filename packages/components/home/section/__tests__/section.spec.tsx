import React from 'react'
import { render } from '@testing-library/react'

import { Section } from '..'

describe('Section', () => {
  it('should render a section with children', () => {
    const { getByTestId } = render(
      <Section testID='test'>
        <MockChildren />
      </Section>
    )

    expect(getByTestId('test')).not.toBeNull()
  })

  it('should be backgroundColor sectionDefault by default', () => {
    const { getByTestId } = render(
      <Section testID='test'>
        <MockChildren />
      </Section>
    )

    expect(getByTestId('test').style.backgroundColor).toEqual('rgb(43, 49, 55)')
  })

  it('should be backgroundColor sectionLight when color=light', () => {
    const { getByTestId } = render(
      <Section testID='test' color='light'>
        <MockChildren />
      </Section>
    )

    expect(getByTestId('test').style.backgroundColor).toEqual('rgb(255, 255, 255)')
  })

  it('should be backgroundColor sectionDark when color=dark', () => {
    const { getByTestId } = render(
      <Section testID='test' color='dark'>
        <MockChildren />
      </Section>
    )

    expect(getByTestId('test').style.backgroundColor).toEqual('rgb(247, 247, 247)')
  })

  it('should be height=300 by default', () => {
    const { getByTestId } = render(
      <Section testID='test'>
        <MockChildren />
      </Section>
    )

    expect(getByTestId('test').style.minHeight).toEqual('300px')
  })

  it('should render the correct height passed in', () => {
    const { getByTestId } = render(
      <Section testID='test' height={600}>
        <MockChildren />
      </Section>
    )

    expect(getByTestId('test').style.minHeight).toEqual('600px')
  })

  it('should render two children as flex column', () => {
    const { getByTestId } = render(
      <Section testID='test' twoColumn>
        <MockChildren />
        <MockChildren />
      </Section>
    )

    expect(getByTestId('test').className).toEqual('sectionColumn')
  })
})

// MOCK DATA //
const MockChildren = () => <div></div>
