import React from 'react'

import styled from 'styled-components'

export default function (props) {
  const ButtonGroup = styled.div`
    display: grid;
    grid-template-columns: repeat(${props.cols || 1}, 1fr);
    justify-items: center;
    grid-column-gap: 5px;
    padding: 0 5px;
    // gridRowGap: 5px;
  `

  return <ButtonGroup style={{ ...props.style }}>{props.children}</ButtonGroup>
}
