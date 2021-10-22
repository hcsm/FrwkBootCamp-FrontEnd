// @flow
import * as React from 'react'
import styled from 'styled-components'
import Icon from '../Icon/index'

interface CommomProps {
  color?: string
  borderColor?: string
  backgroundColor?: string
  hasShadow?: boolean
  className?: string
}
interface Props extends CommomProps {
  icon: string
  onClick?: Function
  iconClass?: string
}
const Circle = styled.div<CommomProps>`
  cursor: pointer;
  .icon {
    cursor: pointer;
    color: ${props => props.color ?? 'white'};
    border: 1pt solid;
    border-color: ${props => props.borderColor || 'transparent'};
    background-color: ${props => props.backgroundColor || 'transparent'};
    border-radius: 50%;
    padding: 2px;
    box-shadow: 0 0 10px
      ${props => (props.hasShadow ? props.backgroundColor : 'transparent')};
  }
`
const IconCircle = (props: Props) => {
  return (
    <Circle
      onClick={() => (props.onClick ? props.onClick() : false)}
      className={props.className}
      color={props.color}
      hasShadow={props.hasShadow}
      backgroundColor={props.backgroundColor}
      borderColor={props.borderColor}
    >
      <Icon icon={props.icon} iconClass={props.iconClass} />
    </Circle>
  )
}

export default IconCircle
