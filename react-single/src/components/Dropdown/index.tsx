// @flow
import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { H5 } from '../../styles/global'
type Props = {
  children?: ReactNode
  title: string
  isClosed: boolean
}

const Title = styled(H5)`
  margin: 25px 25px 6px 25px;
`

const Content = styled.div`
  margin-left: 3em;
`
export const Dropdown = (props: Props) => {
  const [isClose, toggleIsClose] = React.useState(props.isClosed)
  return (
    <li>
      <Title onClick={() => toggleIsClose(!isClose)}>{props.title}</Title>
      <ul className="list-group list-unstyled" hidden={isClose}>
        <Content>{props.children}</Content>
      </ul>
    </li>
  )
}
