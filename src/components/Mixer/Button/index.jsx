import React from 'react'
import './style.scss'

export default function (props) {
  const sizeStyles = {
    small: {
      width: '50px',
      height: '20px',
      backgroundColor: 'green'
    },
    medium: {
      width: '60px',
      height: '24px',
      backgroundColor: 'yellow'
    },
    large: {
      width: '70px',
      height: '28px',
      backgroundColor: 'red'
    }
  }
  const style = {
    backgroundColor: 'rgba(0, 255, 255, 0.5)',
    ...(sizeStyles[props.size] || sizeStyles.small)
  }

  return (
    <div style={{ ...style, ...props.style }} className='Button'>
      {props.children}
    </div>
  )
}
