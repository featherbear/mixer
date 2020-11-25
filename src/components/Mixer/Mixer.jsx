import React from 'react'

import MixStrip from './MixStrip'
import ChannelStrip from './ChannelStrip'
import MasterStrip from './MasterStrip'

import styled from 'styled-components'
const MixerComponent = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  // grid-template-columns: repeat(8, 1fr);
  // grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(3, 1fr);
  user-select: none;

  .Buttons {
    grid-area: 1 / 1 / 4 / 2;
  }

  .Channel-Strip {
    grid-area: 1 / 2 / 4 / 9;
  }

  .Master {
    grid-area: 1 / 9 / 4 / 10;
  }
`

const n_physicalChannelStrips = 16
// const n_mixes = 16

const style = {
  channelStripContainer: {
    display: 'flex',
    backgroundColor: 'green',
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
      <MixerComponent>
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
      </MixerComponent>
    )
  }
}
