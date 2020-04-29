import React from 'react'
import Button from './Button'
import Fader from './Fader/'
import Label from './Label'

import './ChannelStrip'

export default function () {
  return (
    <div className='ChannelStrip'>
      <Button>Select</Button>
      <Button>GEQ</Button>
      <Button>Mute</Button>
      <Fader />
      <Label>MASTER</Label>
    </div>
  )
}
