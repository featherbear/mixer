import React from 'react'

import styled from 'styled-components'

export default function (props) {
  const Label = styled.div`
    text-align: center;
    color: ${props.color || '#FFF'};
    background-color: ${props.backgroundColor || '#000'};
  `
  return <Label>{props.children}</Label>
}
