import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { Button } from '@project/elements'

export default {
  title: 'Elements/Default Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } }
} as Meta

const Template: Story<ButtonProps> = (args: ButtonProps) => <Button {...args} />

export const DefaultButton = Template.bind({})
DefaultButton.args = {
  title: 'Click Me'
}
