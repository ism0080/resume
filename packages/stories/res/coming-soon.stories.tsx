import React from 'react'
import { storiesOf } from '@storybook/react'

import { SvgRenderer } from '@project/res'
import { theme } from '@project/web/theme'

storiesOf('Res/ComingSoon', module).add('Standard', () => (
  <SvgRenderer name='comingSoon' width={300} height={500} fill={theme.colors.defaultAccent} />
))
