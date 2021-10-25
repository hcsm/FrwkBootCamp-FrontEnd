// @flow
import * as React from 'react'
import { Dropdown } from '../../../../../components/Dropdown'
import styled from 'styled-components'
import { H5 } from '../../../../../styles/global'
import { NavLink } from 'react-router-dom'

type Props = {}

const StyledUl = styled.ul`
  & .styledLi {
    text-decoration: none;
    font-weight: 500;
    font-size: 1.2em;
    margin: 10px 0;
    color: white;
    line-height: 26px;
    cursor: pointer;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
  }
  & .styledLi:hover {
    border-left: 1px solid#0af585;
    color: #0af585;
    padding-left: 4px;
  }
  & .styledLi.active {
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
    <StyledUl className="list-group">
      <Dropdown title="Editar listas" isClosed={false}>
        <li>
          <NavLink className={active} to="/detalhe/especialidades">
            Especialidades
          </NavLink>
        </li>
        <li>
          <NavLink className={active} to="/detalhe/stacks">
            Stacks
          </NavLink>
        </li>
      </Dropdown>
      <LiTitle>Enviar notificação</LiTitle>
    </StyledUl>
  )
}

const active = (isActive: boolean) =>
  isActive ? 'styledLi active' : 'styledLi'
export default Menu
