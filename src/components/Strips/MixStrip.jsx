import React from 'react'

import Button from '../../blocks/Button'
import ButtonGroup from '../../blocks/ButtonGroup'
import Label from '../../blocks/Label'

import currentMixContext from '../../data/currentMixContext'
import * as mixEnum from '../../data/mixEnum'

import styled from 'styled-components'
import controlLayout from '../../ControlLayout'

const MixStrip = styled.div`
  display: grid;
  grid-template-rows: repeat(11, 1fr);
  height: 100%;

  .PageSelect {
    grid-area: ${controlLayout.$firstGridArea};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .Bank_Main {
    grid-area: ${controlLayout.$secondGridArea};
    display: flex;
    flex-direction: column;
  }

  .AuxSubMatrix {
    grid-area: ${controlLayout.$thirdGridArea};
    margin: 0 auto;
    width: 95%;
  }

  .Label {
    grid-area: ${controlLayout.$fourthGridArea};
  }
`

function renderMixButtons () {
  // FIXME: REMOVE
  let n_mixes = 16
  // FIXME: REMOVE

  let elems = []
  for (let i = 1; i <= n_mixes; i++) {}
  return
}

export default function () {
  const [currentMix, setCurrentMix] = React.useState(mixEnum.MAIN)

  return (
    <currentMixContext.Provider vaue={currentMix}>
      <MixStrip>
        <div className='PageSelect'>
          <ButtonGroup cols={2} style={{ width: '100%' }}>
            <Button>Prev</Button>
            <Button>Next</Button>
          </ButtonGroup>
        </div>
        <div className='Bank_Main'>
          <ButtonGroup cols={2}>
            <Button>Inputs</Button>
            <Button>DCA Groups</Button>
            <Button>Mix/FX Masters</Button>
            <Button>User</Button>
          </ButtonGroup>
          <Label style={{ marginTop: 8, marginBottom: 8 }}>BANK</Label>
          <div
            style={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <Button
              size='large'
              active={currentMix === mixEnum.MAIN}
              onClick={() => setCurrentMix(mixEnum.MAIN)}
            >
              {mixEnum.MAIN}
            </Button>
          </div>
        </div>
        <div className='AuxSubMatrix'>
          <Label>Aux/Sub/Matrix</Label>
          <ButtonGroup cols={2}>
            {Object.entries(mixEnum.AUX).map(([k, v]) => (
              <Button
                key={k}
                active={currentMix === v}
                onClick={() => setCurrentMix(v)}
              >
                {v}
              </Button>
            ))}
          </ButtonGroup>
          <ButtonGroup cols={2}>
            {Object.entries(mixEnum.FX).map(([k, v]) => (
              <Button
                key={k}
                active={currentMix === v}
                onClick={() => setCurrentMix(v)}
              >
                {v}
              </Button>
            ))}
          </ButtonGroup>
        </div>
        <div>
          <Label>MIX SELECT</Label>
        </div>
      </MixStrip>
    </currentMixContext.Provider>
  )
}
