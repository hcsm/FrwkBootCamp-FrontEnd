// @flow
import * as React from 'react'
import * as Icons from '@material-ui/icons/'
import * as MaterialDesign from 'react-icons/md'
import styled from 'styled-components'

type IconType = typeof import('@material-ui/icons/index')

type Props = {
  icon: string
  color: string
  borderColor?: string
  backgroundColor?: string
  hasShadow?: boolean
  iconClass?: string
}

const Circle = styled.div<Props>`
  .icon {
    color: ${props => props.color};
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
  const Icon = React.createElement(Icons[props.icon! as keyof IconType], {
    className: `icon ${props.iconClass ?? ''}`,
  })
  return <Circle {...props}>{Icon}</Circle>
}

export default IconCircle
