interface SvgIconProps {
  fill?: string
  width?: number
  height?: number
  direction?: string
  scale?: number
}

interface SvgRendererProps extends SvgIconProps {
  name: import('./icons').svgIconsName
  /**
   * Left and right padding
   * @Value 10 = paddingLeft: 5, paddingRight: 5
   */
  padding?: number
  hyperlink?: string
  /**
   * Aria Label for accessibility
   */
  label?: string
}
