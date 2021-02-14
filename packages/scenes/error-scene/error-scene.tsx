import React from 'react'

import { theme } from '@project/web/theme'

import { ErrorSceneProps } from './error-scene.interface'
import less from './error-scene.less'

export const ErrorScene = ({ testID, text }: ErrorSceneProps) => (
  <div data-testid={testID} className={less.wrapper} style={{ backgroundColor: theme.colors.defaultAccent }}>
    <h1>{text}</h1>
  </div>
)
