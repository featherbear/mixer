import React from 'react'

const style = {
  textAlign: 'center'
}

// size: small medium large

export default function (props) {
  return (
    <div style={style} className='Button'>
      {props.children}
    </div>
  )
}
