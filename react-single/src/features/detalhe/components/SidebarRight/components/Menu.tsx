// @flow
import * as React from 'react'
import { Dropdown } from '../../../../../components/Dropdown'
import { H5 } from '../../../../../styles/global'
import styled from 'styled-components'

type Props = {}
const StyledLi = styled(H5)`
  font-size: 1.2em;
  &:hover {
    border-left: 1px solid#0af585;
    color: #0af585;
    padding-left: 4px;
  }
`
const LiTitle = styled(H5)`
  margin: 7px 25px 6px 25px;
`
const Menu = (props: Props) => {
  return (
    <ul className="list-group">
      <Dropdown title="Editar listas">
        <StyledLi>Especialidades</StyledLi>
        <StyledLi>Stacks</StyledLi>
      </Dropdown>
      <LiTitle>Enviar notificação</LiTitle>
    </ul>
  )
}

export default Menu
