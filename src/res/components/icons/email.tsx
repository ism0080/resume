import React from 'react'

const defaultDimensions = {
  height: 40,
  width: 40,
}

export const EmailIcon = (props: SvgIconProps) => {
  const width = props.width || defaultDimensions.width
  const height = props.height || defaultDimensions.height
  const fill = props.fill || '#FFFFFF'

  return (
    <svg width={width} height={height} viewBox='0 0 25 25'>
      <path
        d='M12 2.02c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 12.55l-5.992-4.57h11.983l-5.991 4.57zm0 1.288l-6-4.629v6.771h12v-6.771l-6 4.629z'
        fill={fill}
      />
    </svg>
  )
}
