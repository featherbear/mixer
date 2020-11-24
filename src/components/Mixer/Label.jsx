import React from 'react'

export default function (props) {
  const style = {
    textAlign: 'center',
    color: props.color || '#FFF',
    backgroundColor: props.backgroundColor || '#000'
  }
  return <div style={style}>{props.children}</div>
}
