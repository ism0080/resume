import React from 'react'
import { svgIcons } from './icons'

export const SvgRenderer = ({ fill, width, height, direction, name, padding, hyperlink }: SvgRendererProps) => {
  const Icon = svgIcons[name]
  const calcPadding = padding ? padding / 2 : undefined

  if (padding || hyperlink) {
    return (
      <div style={{ paddingLeft: calcPadding, paddingRight: calcPadding }}>
        <a href={hyperlink}>
          <Icon fill={fill} width={width} height={height} direction={direction} />
        </a>
      </div>
    )
  }

  return <Icon fill={fill} width={width} height={height} direction={direction} />
}
