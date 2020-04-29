import React from 'react'

import ChannelStrip from './components/ChannelStrip'
import MasterStrip from './components/MasterStrip'
import Button from './components/Button'
import ButtonGroup from './components/ButtonGroup'

import './Mixer.css'

const channelStripsStyle = {
  display: 'flex',
  backgroundColor: 'red',
  height: '100%'
}

export default class Mixer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  renderChannelStrips () {
    let elems = []
    for (let i = 1; i <= 16; i++) {
      elems.push(<ChannelStrip key={i} label={i}></ChannelStrip>)
    }
    return elems
  }

  render () {
    return (
      <div className='Mixer grid-container'>
        <div className='Buttons'>
          <ButtonGroup>
            <Button />
            <Button />
          </ButtonGroup>
        </div>
        <div className='LCDs'></div>
        <div className='Channel-Strip'>
          <div style={channelStripsStyle}>{this.renderChannelStrips()}</div>
        </div>
        <div className='Master'>
          <MasterStrip />
        </div>
      </div>
    )
  }
}
