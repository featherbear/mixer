import React from 'react'

import styled from 'styled-components'

const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.cols || 1}, 1fr);
  justify-items: center;
  grid-column-gap: 5px;
  padding: 0 5px;
`

export default function (props) {
  return <ButtonGroup cols={props.cols} style={{ ...props.style }}>{props.children}</ButtonGroup>
}
