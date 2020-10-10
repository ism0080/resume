import React from 'react'
import { render } from '@testing-library/react'

import { Spinner } from '../spinner'

const TESTID = 'spinner'

const mockColor = 'red'
const mockTintColor = 'blue'

describe('Spinner', () => {
  test('should render with defaults', () => {
    const { getByTestId } = render(<Spinner testID={TESTID} />)

    expect(getByTestId(TESTID).style.borderColor).toEqual('#fff')
    expect(getByTestId(TESTID).style.borderRightColor).toEqual('transparent')
  })

  test('should set primary border color', () => {
    const { getByTestId } = render(<Spinner testID={TESTID} color={mockColor} />)

    expect(getByTestId(TESTID).style.borderColor).toEqual(mockColor)
    expect(getByTestId(TESTID).style.borderRightColor).toEqual('transparent')
  })

  test('should set tint border color', () => {
    const { getByTestId } = render(<Spinner testID={TESTID} tint={mockTintColor} />)

    expect(getByTestId(TESTID).style.borderColor).toEqual('#fff')
    expect(getByTestId(TESTID).style.borderRightColor).toEqual(mockTintColor)
  })
})
