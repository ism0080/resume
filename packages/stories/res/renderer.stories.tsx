import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { svgIcons, SvgRenderer } from '@project/res'

export default {
  title: 'Res/Renderer',
  component: SvgRenderer,
  argTypes: {
    name: { control: { type: 'select', options: Object.keys(svgIcons) } },
    fill: { control: 'color' },
    width: { control: 'number' },
    height: { control: 'number' },
    padding: { control: 'number' },
    hyperlink: { control: 'text' }
  },
  args: {
    name: 'profile',
    fill: '#000'
  }
} as Meta

const Template: Story<SvgRendererProps> = (args: SvgRendererProps) => <SvgRenderer {...args} />

export const Renderer = Template.bind({})
