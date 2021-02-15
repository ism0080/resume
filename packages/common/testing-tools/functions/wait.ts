import { act } from '@testing-library/react'

export const wait = async (ms = 0) => {
  await act(
    () =>
      new Promise((resolve) => {
        setTimeout(resolve, ms)
      })
  )
}
