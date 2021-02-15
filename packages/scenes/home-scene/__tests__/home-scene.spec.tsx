import React from 'react'
import { MockedProvider } from '@apollo/client/testing'
import { render } from '@testing-library/react'

import { meExpertiseQueryMock } from '@project/testing-tools'

import { HomeScene } from '../'

describe('home-scene', () => {
  test('is rendered', () => {
    const container = render(
      <MockedProvider mocks={meExpertiseQueryMock} addTypename={true}>
        <HomeScene />
      </MockedProvider>
    )

    expect(container.baseElement).not.toBeNull()
  })

  test('renders without error', () => {
    const { getByTestId } = render(
      <MockedProvider mocks={meExpertiseQueryMock} addTypename={false}>
        <HomeScene />
      </MockedProvider>
    )

    expect(getByTestId('home-loader').style.color).toEqual('rgb(0, 0, 0)')
  })
})
