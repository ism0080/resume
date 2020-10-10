import React from 'react'

import { svgIcons } from './icons'
import less from './svg-renderer.less'

export const SvgRenderer = ({ fill, width, height, direction, name, padding, hyperlink, label }: SvgRendererProps) => {
  const magic = 2
  const Icon = svgIcons[name]
  const calcPadding = padding ? padding / magic : undefined

  if (hyperlink) {
    return (
      <div className={less.scale} style={{ paddingLeft: calcPadding, paddingRight: calcPadding }}>
        <a href={hyperlink} aria-label={label}>
          <Icon fill={fill} width={width} height={height} direction={direction} />
        </a>
      </div>
    )
  }

  return (
    <div style={{ paddingLeft: calcPadding, paddingRight: calcPadding }}>
      <Icon fill={fill} width={width} height={height} direction={direction} />
    </div>
  )
}
