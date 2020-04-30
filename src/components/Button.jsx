import React from 'react'

// size: small medium large
const style = {
  textAlign: 'center',
  cursor: 'pointer'
}

export default function (props) {
  return (
    <div style={{ ...style, ...props.style }} className='Button'>
      {props.children}
    </div>
  )
}
