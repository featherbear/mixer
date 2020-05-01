import React from 'react'

export default function (props) {
  let elems = []
  for (let i = 0; i < (props.bars || 0); i++) {
    elems.push(<button key={i + 1} />)
  }

  return <div>{elems}</div>
}
