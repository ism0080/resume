import React from 'react'
import { storiesOf } from '@storybook/react'

import { Button } from '@project/elements'

const TESTID = 'button'

storiesOf('Elements/Button', module).add('Standard', () => <Button testID={TESTID} title='Click ME' />)
