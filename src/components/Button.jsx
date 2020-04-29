import React from 'react'

// size: small medium large

export default function (props) {
  return (
    <div style={{ textAlign: 'center', ...props.style }} className='Button'>
      {props.children}
    </div>
  )
}
