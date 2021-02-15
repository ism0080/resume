import React from 'react'
import { render } from '@testing-library/react'

import { ErrorScene } from '../'

const TESTID = 'error-scene'

describe('error-scene', () => {
  test('render error message', () => {
    const { getByTestId } = render(<ErrorScene testID={TESTID} text='Error Occurred' />)

    expect(getByTestId(TESTID).textContent).toEqual('Error Occurred')
  })
})
