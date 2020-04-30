import React from 'react'

import Button from './Button'
import ButtonGroup from './ButtonGroup'
import Label from './Label'

import './MixStrip.scss'

function renderMixButtons () {
  // FIXME: REMOVE
  let n_mixes = 16
  // FIXME: REMOVE

  let elems = []
  for (let i = 1; i <= n_mixes; i++) {
    elems.push(<Button key={i}>Mix {i}</Button>)
  }
  return <ButtonGroup cols={2}>{elems}</ButtonGroup>
}

export default function () {
  console.log()
  return (
    <div className='MixStrip'>
      <div className='Bank_Main'>
        <ButtonGroup cols='2'>
          <Button>Inputs</Button>
          <Button>DCA Groups</Button>
          <Button>Mix/FX Masters</Button>
          <Button>User</Button>
        </ButtonGroup>
        <Button size='large'>Main Mix</Button>
      </div>
      <div className='AuxSubMatrix'>
        <Label>Aux/Sub/Matrix</Label>
        {renderMixButtons()}
        <ButtonGroup cols='2'>
          <Button>FX A</Button>
          <Button>FX B</Button>
          <Button>FX C</Button>
          <Button>FX D</Button>
        </ButtonGroup>
      </div>
      <div className=''>
        <Label>MIX SELECT</Label>
      </div>
    </div>
  )
}
