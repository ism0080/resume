import React from 'react'
import { storiesOf } from '@storybook/react'

import { SvgRenderer } from '@project/res'
import { theme } from '@project/web/theme'

storiesOf('Res/Email', module).add('Standard', () => (
  <SvgRenderer name='emailIcon' fill={theme.colors.black} hyperlink='mailto:isaac.mackle@gmail.com' label='Email' />
))
