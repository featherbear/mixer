import React from 'react'
import Button from './Button'
import Fader from './Fader/'
import Label from './Label'

import './ChannelStrip'
const disp = {
  display: 'none'
}

export default function () {
  return (
    <div className='ChannelStrip'>
      <Button style={disp}>Select</Button>
      <Button>GEQ</Button>
      <Button>Mute</Button>
      <Fader />
      <Label>MASTER</Label>
    </div>
  )
}
