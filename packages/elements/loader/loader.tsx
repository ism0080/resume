import React from 'react'

import { LoaderProps } from './loader.interface'
import less from './loader.less'

/**
 * Renders a spinning loading indicator with optional color
 * background stroke tint color
 *
 * @param size Configured size variants or numerical value interpreted as pixels
 * @param color The primary spinner color, occupies the majority of the spinning stroke
 * @param tint The secondary spinner color, sets the "background stroke" color
 *
 * @example
 * <Spinner
 *  testID={'spinner'}
 *  color={'red'}
 *  tint={'blue'}
 * />
 */
export const Loader = ({ testID, color = '#fff' }: LoaderProps) => (
  <div data-testid={testID} className={less.loader} style={{ color: color }} />
)
