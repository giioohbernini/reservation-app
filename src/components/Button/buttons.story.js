import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from './index'

const stories = storiesOf('Buttons', module)

stories.add('With no props', () => (
  <Button>Button</Button>
))

stories.add('Orange variation', () => (
  <Button color='orange'>Button</Button>
))

stories.add('BorderSize variation', () => (
  <Button borderSize={2}>Button</Button>
))

stories.add('With onClick', () => {
  return (
    <Button onClick={action('callback')}>Button</Button>
  )
})
