import React from 'react'
import { storiesOf } from '@storybook/react'

import Tooltip from './index'

const stories = storiesOf('Tooltips', module)

stories.add('With text', () => (
  <div style={{ marginTop: '50px', marginLeft: '20px' }}>
    <Tooltip text='123'>Tooltip</Tooltip>
  </div>
))
