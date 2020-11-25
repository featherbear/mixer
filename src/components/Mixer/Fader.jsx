import React from 'react'

import styled from 'styled-components'

const FaderStrip = styled.div`
  height: 100%;
`

const FaderTrack = styled.div`
  margin: 0 auto;
  width: 6px;
  border-radius: 3px;
  background-color: black;
  height: 100%;
`

export default function () {
  return (
    <FaderStrip>
      <FaderTrack />
    </FaderStrip>
  )
}
