import React from 'react'
import { svgIcons } from './icons'

export const SvgRenderer = ({ fill, width, height, direction, name }: SvgRendererProps) => {
  const Icon = svgIcons[name]

  return <Icon fill={fill} width={width} height={height} direction={direction} />
}
