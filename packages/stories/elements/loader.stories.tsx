import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { Loader } from '@project/elements'

export default {
  title: 'Elements/Default Loader',
  component: Loader,
  argTypes: { color: { control: 'color' }, isCentered: { control: 'boolean' } }
} as Meta

const Template: Story<LoaderProps> = (args: LoaderProps) => <Loader {...args} />

export const DefaultLoader = Template.bind({})
DefaultLoader.args = {
  color: '#000'
}
