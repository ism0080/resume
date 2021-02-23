import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { Jumbotron } from '@project/components'

export default {
  title: 'Components/Default Jumbotron',
  component: Jumbotron
} as Meta

const Template: Story<JumbotronProps> = (args: JumbotronProps) => <Jumbotron {...args} />

export const DefaultJumbotron = Template.bind({})
DefaultJumbotron.args = {
  title: 'hello',
  subtitle: 'goodbye'
}
