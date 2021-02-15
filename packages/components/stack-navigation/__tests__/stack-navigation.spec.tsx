import React from 'react'
import { MockedProvider } from '@apollo/client/testing'
import { render } from '@testing-library/react'

import { meLinksQueryMock, wait } from '@project/testing-tools'

import { StackNavigation } from '../'

const TestComponent = () => <p data-testid='test-component'>Test Component</p>

describe('stack-navigation', () => {
  test('renders without error', () => {
    const { getByTestId } = render(
      <MockedProvider mocks={meLinksQueryMock} addTypename={false}>
        <StackNavigation>
          <TestComponent />
        </StackNavigation>
      </MockedProvider>
    )

    expect(getByTestId('stack-loader').style.color).toEqual('rgb(0, 0, 0)')
  })

  test('renders header', async () => {
    const { getByTestId } = render(
      <MockedProvider mocks={meLinksQueryMock} addTypename={false}>
        <StackNavigation>
          <TestComponent />
        </StackNavigation>
      </MockedProvider>
    )

    await wait()

    expect(getByTestId('header').textContent).toEqual('Isaac MackleSoftware Engineer')
  })

  test('renders footer', async () => {
    const { getByTestId } = render(
      <MockedProvider mocks={meLinksQueryMock} addTypename={false}>
        <StackNavigation>
          <TestComponent />
        </StackNavigation>
      </MockedProvider>
    )

    await wait()

    expect(getByTestId('footer.link.GitHub').textContent).toEqual('GitHub')
    expect(getByTestId('footer.link.Email').textContent).toEqual('Email')
    expect(getByTestId('footer.link.LinkedIn').textContent).toEqual('LinkedIn')
  })
})
