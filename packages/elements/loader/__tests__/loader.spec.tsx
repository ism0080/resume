import React from 'react'
import { render } from '@testing-library/react'

import { Loader } from '../loader'

const TESTID = 'loader'

const mockColor = 'red'

describe('Spinner', () => {
  test('should render with defaults', () => {
    const { getByTestId } = render(<Loader testID={TESTID} />)

    expect(getByTestId(TESTID).style.color).toEqual('rgb(255, 255, 255)')
  })

  test('should set primary border color', () => {
    const { getByTestId } = render(<Loader testID={TESTID} color={mockColor} />)

    expect(getByTestId(TESTID).style.color).toEqual(mockColor)
  })
})
