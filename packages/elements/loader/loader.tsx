import React from 'react'

import { LoaderProps } from './loader.interface'
import less from './loader.less'

/**
 * Renders a loading indicator with optional color
 * background stroke color
 *
 * @param size Configured size variants or numerical value interpreted as pixels
 * @param color The primary spinner color, occupies the majority of the spinning stroke
 *
 * @example
 * <Loader
 *  testID={'spinner'}
 *  color={'red'}
 * />
 */
export const Loader = ({ testID, color = '#fff' }: LoaderProps) => (
  <div data-testid={testID} className={less.loader} style={{ color: color }} />
)
