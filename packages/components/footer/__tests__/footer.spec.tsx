import React from 'react'
import { render } from '@testing-library/react'

import { Footer } from '..'

const LINKS = [
  { title: 'title', url: 'www' },
  { title: 'title2', url: 'https' }
]
const TITLE = 'Name'

describe('Footer', () => {
  it('should render the title', () => {
    const { getByTestId } = render(<Footer testID='test' title={TITLE} links={LINKS} />)

    expect(getByTestId('test').firstChild?.textContent).toEqual(TITLE)
  })

  it('should render a link', () => {
    const { getByTestId } = render(<Footer testID='test' title={TITLE} links={LINKS} />)

    expect(getByTestId(`test.link.${LINKS[0].title}`).textContent).toEqual(LINKS[0].title)
  })

  it('should NOT render a link when NOT supplied', () => {
    const { queryByTestId } = render(<Footer testID='test' title={TITLE} />)

    expect(queryByTestId(`test.link.${LINKS[0].title}`)).toBeNull()
  })
})
