import React from 'react'

import styled from 'styled-components'

const sizeStyles = {
  small: {
    width: '50px',
    height: '20px'
    // backgroundColor: 'green'
  },
  medium: {
    width: '60px',
    height: '24px'
    // backgroundColor: 'yellow'
  },
  large: {
    width: '70px',
    height: '28px'
    // backgroundColor: 'red'
  }
}

const Button = styled.div`
  cursor: pointer;

  margin: 2px auto;
  padding: 8px;

  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;

  line-height: 14px;
  border-radius: 5px;

  background-color: rgba(0, 255, 255, 0.5);
`

export default function (props) {
  return (
    <Button
      style={{
        ...(sizeStyles[props.size] || sizeStyles.small),
        ...props.style
      }}
    >
      {props.children}
    </Button>
  )
}
