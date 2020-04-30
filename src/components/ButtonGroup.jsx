import React from 'react'

export default function (props) {
  let columns = props.cols || 1
  const style = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridColumnGap: '10px',
    gridRowGap: '10px'
  }

  return <div style={style}>{props.children}</div>
}
