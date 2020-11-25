import React from 'react'
import Button from '../../blocks/Button'
import Fader from './Fader'
import Label from '../../blocks/Label'

import { ChannelStrip } from './ChannelStrip'

export default function (props) {
  return (
    <ChannelStrip style={props.style}>
      <div className='Header'>
        <Button size='medium'>Talk</Button>
      </div>
      <div className='Controls'>
        <Button>Select</Button>
        <Button>GEQ</Button>
        <Button>Mute</Button>
      </div>
      <div className='Fader'>
        <Fader />
      </div>
      <div className='Label'>
        <Label>MASTER</Label>
      </div>
    </ChannelStrip>
  )
}
