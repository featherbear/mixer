import React from 'react'

import MixStrip from './Strips/MixStrip'
import ChannelStrip from './Strips/ChannelStrip'
import MasterStrip from './Strips/MasterStrip'

import currentMixContext from '../data/currentMixContext'
import currentFaderViewContext from '../data/currentFaderViewContext'
import faderViewEnum from '../data/faderViewEnum'
import * as mixEnum from '../data/mixEnum'

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
    height: '100%'
  },
  channelStrip: {
    flexGrow: 1
  }
}

function renderChannelStrips () {
  let elems = []
  for (let i = 1; i <= n_physicalChannelStrips; i++) {
    elems.push(<ChannelStrip style={style.channelStrip} key={i} label={i} />)
  }
  return elems
}

export default function (props) {
  let [currentMix, setCurrentMix] = React.useState(mixEnum.MAIN)
  let [currentFaderView, setCurrentFaderView] = React.useState(
    faderViewEnum.Inputs
  )

  return (
    <currentFaderViewContext.Provider
      value={[currentFaderView, setCurrentFaderView]}
    >
      <currentMixContext.Provider value={[currentMix, setCurrentMix]}>
        <MixerComponent>
          <div className='Buttons'>
            <MixStrip />
          </div>
          <div className='Channel-Strip'>
            <div style={style.channelStripContainer}>
              {renderChannelStrips()}
            </div>
          </div>
          <div className='Master'>
            <MasterStrip />
          </div>
        </MixerComponent>
      </currentMixContext.Provider>
    </currentFaderViewContext.Provider>
  )
}
