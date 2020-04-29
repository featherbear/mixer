import React from 'react'
import Button from './Button'
import Fader from './Fader/'
import VUMeter from './VUMeter'
import Label from './Label'

import './ChannelStrip.css'

export default function (props) {
  return (
    <div className='ChannelStrip'>
      <Button>Select</Button>
      <Button>Solo</Button>
      <Button>Mute</Button>
      <VUMeter />
      <Fader />
      <Label>{props.label}</Label>
    </div>
  )
}
