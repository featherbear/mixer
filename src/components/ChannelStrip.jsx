import React from 'react'
import Button from './Button'
import Fader from './Fader/'
import VUMeter from './VUMeter'
import Label from './Label'
import LCD from './LCD'

import './ChannelStrip.css'

export default function (props) {
  return (
    <div style={props.style} className='ChannelStrip'>
      <LCD />
      <Button>Select</Button>
      <Button>Solo</Button>
      <Button>Mute</Button>
      <VUMeter />
      <Fader />
      <Label>{props.label}</Label>
    </div>
  )
}
