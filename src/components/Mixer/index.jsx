import React from 'react'

import './style.scss'

import MixStrip from './MixStrip'
import ChannelStrip from './ChannelStrip'
import MasterStrip from './MasterStrip'

const n_physicalChannelStrips = 16
// const n_mixes = 16

const style = {
  channelStripContainer: {
    display: 'flex',
    backgroundColor: 'red',
    height: '100%'
  },
  channelStrip: {
    flexGrow: 1
  }
}

export default class Mixer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  renderChannelStrips () {
    let elems = []
    for (let i = 1; i <= n_physicalChannelStrips; i++) {
      elems.push(<ChannelStrip style={style.channelStrip} key={i} label={i} />)
    }
    return elems
  }

  render () {
    return (
      <div className='Mixer'>
        <div className='Buttons'>
          <MixStrip />
        </div>
        <div className='Channel-Strip'>
          <div style={style.channelStripContainer}>
            {this.renderChannelStrips()}
          </div>
        </div>
        <div className='Master'>
          <MasterStrip />
        </div>
      </div>
    )
  }
}
