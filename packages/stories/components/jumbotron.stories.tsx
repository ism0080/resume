import React from 'react'
import { storiesOf } from '@storybook/react'

import { Jumbotron } from '@project/components'

const TESTID = 'Jumbotron'

storiesOf('Components/Jumbotron', module).add('Standard', () => <Jumbotron testID={TESTID} title='Title' subtitle='Subtitle' />)
