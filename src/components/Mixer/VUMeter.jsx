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

export default function (props) {
  let elems = []
  for (let i = 0; i < (props.bars || 0); i++) {
    elems.push(<button key={i + 1} />)
  }

  return <VUMeter>{elems}</VUMeter>
}
