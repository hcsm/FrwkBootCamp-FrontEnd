import React from 'react'

import {
  WrapperHeader,
  HeaderTitle,
  Left,
  Right,
  SearchInput
} from './styles'

type Props = {}

export const Header = (props: Props) => {
  return (
    <WrapperHeader>
      <Left>
        <HeaderTitle>Framebook</HeaderTitle>
      </Left>
      <Right><SearchInput placeholder='buscar'/></Right>
    </WrapperHeader>
  );
}
