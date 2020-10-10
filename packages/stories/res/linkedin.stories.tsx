import React from 'react'
import { storiesOf } from '@storybook/react'

import { SvgRenderer } from '@project/res'
import { theme } from '@project/web/theme'

storiesOf('Res/LinkedIn', module).add('Standard', () => (
  <SvgRenderer name='linkedInIcon' fill={theme.colors.black} hyperlink='https://linkedin.com/in/ism0080' label='LinkedIn' />
))
