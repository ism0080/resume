import React from 'react'
import { storiesOf } from '@storybook/react'

import { Loader } from '@project/elements'

const TESTID = 'loader'

storiesOf('Elements/Loader', module).add('Standard', () => <Loader testID={TESTID} color='#000' />)
