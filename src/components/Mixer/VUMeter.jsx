import React from 'react'

import styled from 'styled-components'
const VUMeter = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center; // space-evenly
  width: 50px;
`

const Bar = styled.span`
  border-radius: 5px;
  height: 5px;

  &:not(:last-child) {
    margin-bottom: 3px;
  }
`

const colourMap = {
  g: '#A0D10F',
  y: '#CF8C3A',
  r: '#DB4D4D'
}

/**
 * bars -> bottom up 'r' / 'y' / 'g'
 */
export default function (props) {
  let elems = []
  for (let i = (props.bars || []).length - 1; i >= 0; i--) {
    elems.push(
      <Bar key={i} style={{ backgroundColor: colourMap[props.bars[i]] }} />
    )
  }

  // TODO: Value into VU and opacity

  return <VUMeter>{elems}</VUMeter>
}
