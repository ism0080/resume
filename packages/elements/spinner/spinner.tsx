import React from 'react'

import { SpinnerProps } from './spinner.interface'
import less from './spinner.less'

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
export const Spinner = ({ testID, color = '#fff', tint = 'transparent' }: SpinnerProps) => (
  <div data-testid={testID} className={less.spinner} style={{ borderColor: color, borderRightColor: tint }} />
)
