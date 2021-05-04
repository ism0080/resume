import React, { useEffect } from 'react'

import { GAexception, GApageView } from '@project/ga'
import { theme } from '@project/web/theme'

import { ErrorSceneProps } from './error-scene.interface'
import less from './error-scene.less'

export const ErrorScene = ({ testID, text }: ErrorSceneProps) => {
  useEffect(() => {
    GApageView('Error')
    GAexception(text)
  })

  return (
    <div data-testid={testID} className={less.wrapper} style={{ backgroundColor: theme.colors.defaultAccent }}>
      <h1>{text}</h1>
    </div>
  )
}
