import React from 'react'

import styled from 'styled-components'

import knobImage from './knob.png'
import _unstyledSlider from 'react-slider'

const FaderStrip = styled.div`
  height: 100%;
`
const Slider = styled(_unstyledSlider)`
  height: 100%;
  width: 25px;
  margin: 0 auto;
`

const StyledThumb = styled.div`
  background-image: url(${knobImage});
  background-size: cover;
  height: 55px;
  width: 27px;
  cursor: grab;
`
const Thumb = (props, state) => <StyledThumb {...props} />

const StyledTrack = styled.div`
  left: 0;
  right: 0;
  margin: 10px;
  background: ${props => (props.index === 1 ? '#111' : '#000')};
  border-radius: 999px;
`

const Track = (props, state) => <StyledTrack {...props} index={state.index} />

export default function () {
  return (
    <FaderStrip>
      <Slider
        orientation='vertical'
        invert
        defaultValue={50}
        renderTrack={Track}
        renderThumb={Thumb}
      />
    </FaderStrip>
  )
}
