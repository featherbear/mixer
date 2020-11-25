import React from 'react'

import styled from 'styled-components'

const sizeStyles = {
  small: {
    width: '50px',
    height: '20px'
  },
  medium: {
    width: '60px',
    height: '24px'
  },
  large: {
    width: '70px',
    height: '28px'
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

  background-color: hsla(0, 0%, 90%, 1);

  ${props => props.active && 'color: red;'}
`

export default function (props) {
  return (
    <Button
      onClick={props.onClick}
      style={{
        ...(sizeStyles[props.size] || sizeStyles.small),
        ...props.style
      }}
      active={props.active}
    >
      {props.children}
    </Button>
  )
}
