import React from 'react'

export default function (props) {
  const style = {
    display: 'grid',
    gridTemplateColumns: `repeat(${props.cols || 1}, 1fr)`,
    justifyItems: 'center'
    // gridColumnGap: '5px',
    // gridRowGap: '5px'
  }

  return <div style={style}>{props.children}</div>
}
