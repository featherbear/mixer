import React from 'react'

import Button from './Button'
import Fader from './Fader'
import VUMeter from './VUMeter'
import Label from './Label'
import LCD from './LCD'

import styled from 'styled-components'
import controlLayout from '../../ControlLayout'

export const ChannelStrip = styled.div`
  display: grid;
  grid-template-rows: repeat(11, 1fr);
  height: 100%;
  text-align: center;

  .Header {
    grid-area: ${controlLayout.$firstGridArea};
  }

  .Controls {
    grid-area: ${controlLayout.secondGridArea};
  }

  .Fader {
    grid-area: ${controlLayout.$thirdGridArea};
  }

  .Label {
    grid-area: ${controlLayout.$fourthGridArea};
  }
`

export default function (props) {
  return (
    <ChannelStrip style={props.style}>
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
    </ChannelStrip>
  )
}
