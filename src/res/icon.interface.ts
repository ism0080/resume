interface SvgIconProps {
  fill?: string
  width?: number
  height?: number
  direction?: string
  scale?: number
}

interface SvgRendererProps extends SvgIconProps {
  name: import('./icons').svgIconsName
}
