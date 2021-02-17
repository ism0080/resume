import React from 'react'
import { cleanup, render } from '@testing-library/react'

import { Project } from '..'

const props = {
  imageUrl: 'https://imagehost.com/hello.png',
  imageAlt: 'alt image',
  websiteUrl: 'https://test.com',
  sourceCodeUrl: 'https://test.com',
  title: 'Test project',
  description: 'testing the project',
  testID: 'testid'
}

describe('project', () => {
  afterEach(cleanup)

  it('should render', () => {
    const container = render(<Project {...props} />)

    expect(container.baseElement).not.toBeNull()
  })

  it('should render a title', () => {
    const { getByTestId } = render(<Project {...props} />)

    expect(getByTestId(`${props.testID}-title`).textContent).toEqual(props.title)
  })

  it('should render a description', () => {
    const { getByTestId } = render(<Project {...props} />)

    expect(getByTestId(`${props.testID}-description`).textContent).toEqual(props.description)
  })
})
