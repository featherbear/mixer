import React from 'react'

import styled from 'styled-components'

const Label = styled.div`
  text-align: center;
  color: ${props => props.color || '#FFF'};
  background-color: ${props => props.backgroundColor || '#000'};
`

export default function (props) {
  return <Label color={props.color} backgroundColor={props.backgroundColor} style={props.style}>{props.children}</Label>
}
