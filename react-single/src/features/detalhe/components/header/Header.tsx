import React from 'react'
import { HeaderTitle, Left, Right, SearchInput, WrapperHeader } from './styles'
import SidebarRight from '../SidebarRight/index'

type Props = {}

export const Header = (props: Props) => {
  return (
    <WrapperHeader>
      <Left>
        <HeaderTitle>Framebook</HeaderTitle>
      </Left>
      <Right>
        <SearchInput placeholder="buscar" />
        <SidebarRight />
      </Right>
    </WrapperHeader>
  )
}
