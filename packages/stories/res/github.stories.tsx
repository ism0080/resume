import React from 'react'
import { storiesOf } from '@storybook/react'

import { SvgRenderer } from '@project/res'
import { theme } from '@project/web/theme'

storiesOf('Res/GitHub', module).add('Standard', () => (
  <SvgRenderer name='gitHubIcon' fill={theme.colors.black} hyperlink='https://github.com/ism0080' label='GitHub' />
))
