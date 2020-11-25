import React from 'react'

import Button from '../../blocks/Button'
import ButtonGroup from '../../blocks/ButtonGroup'
import Label from '../../blocks/Label'

import currentMixContext from '../../data/currentMixContext'
import currentFaderViewContext from '../../data/currentFaderViewContext'
import faderViewEnum from '../../data/faderViewEnum'
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

const ButtonWithContextHOF = (subscribe, provide, value, props) => (
  <Button
    {...props}
    active={subscribe === value}
    onClick={() => provide(value)}
  >
    {value}
  </Button>
)

export default function () {
  const [currentMix, setCurrentMix] = React.useState(mixEnum.MAIN)
  const [currentFaderView, setCurrentFaderView] = React.useState(
    faderViewEnum.Inputs
  )

  return (
    <currentFaderViewContext.Provider value={currentFaderView}>
      <currentMixContext.Provider value={currentMix}>
        <MixStrip>
          <div className='PageSelect'>
            <ButtonGroup cols={2} style={{ width: '100%' }}>
              <Button>Prev</Button>
              <Button>Next</Button>
            </ButtonGroup>
          </div>
          <div className='Bank_Main'>
            <ButtonGroup cols={2}>
              {Object.entries(faderViewEnum).map(([key, v]) =>
                ButtonWithContextHOF(currentFaderView, setCurrentFaderView, v, {
                  key
                })
              )}
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
              {ButtonWithContextHOF(currentMix, setCurrentMix, mixEnum.MAIN, {
                size: 'large'
              })}
            </div>
          </div>
          <div className='AuxSubMatrix'>
            <Label>Aux/Sub/Matrix</Label>
            <ButtonGroup cols={2}>
              {Object.entries(mixEnum.AUX).map(([key, v]) =>
                ButtonWithContextHOF(currentMix, setCurrentMix, v, {
                  key
                })
              )}
            </ButtonGroup>
            <ButtonGroup cols={2}>
              {Object.entries(mixEnum.FX).map(([key, v]) =>
                ButtonWithContextHOF(currentMix, setCurrentMix, v, { key })
              )}
            </ButtonGroup>
          </div>
          <div>
            <Label>MIX SELECT</Label>
          </div>
        </MixStrip>
      </currentMixContext.Provider>
    </currentFaderViewContext.Provider>
  )
}
