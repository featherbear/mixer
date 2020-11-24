import React from 'react'
import Button from '../Button/'
import Fader from '../Fader'
import VUMeter from '../VUMeter'
import Label from '../Label'
import LCD from '../LCD'

import './style.scss'

export default function (props) {
  return (
    <div style={props.style} className='ChannelStrip'>
      <div className='Header'>
        <LCD />
      </div>
      <div className='Controls'>
        <Button>Select</Button>
        <Button>Solo</Button>
        <Button>Mute</Button>
        <VUMeter bars='3' />
      </div>
      <div className='Fader'>
        <Fader />
      </div>
      <div className='Label'>
        <Label>{props.label}</Label>
      </div>
    </div>
  )
}
