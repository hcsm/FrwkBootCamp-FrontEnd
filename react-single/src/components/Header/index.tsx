import React, { useState } from 'react'
import Stack from '@material-ui/core/Stack'
import InputSearch from './../InputSearch'
import GithubIcon from '../ButtonGit'
import NotificationsIcon from '../NotificationsIcon'
import SidebarRight from '../SidebarRight'

import {
  HeaderTitle,
  Left,
  Right,
  WrapperHeader,
  WrapperSearch,
} from './styles'

type Props = {}

export const Header = (props: Props) => {
  const [searchInputValue, setSearchInputValue] = useState('')

  return (
    <WrapperHeader className="WrapperHeader">
      <Left className="Left">
        <HeaderTitle className="HeaderTitle">Framebook</HeaderTitle>
      </Left>

      <Right className="Right">
        <Stack direction="row" spacing={5}>
          <WrapperSearch>
            <InputSearch
              placeholder="Buscar..."
              value={searchInputValue}
              setValue={setSearchInputValue}
            />
          </WrapperSearch>

          <Stack direction="row" spacing={2}>
            <GithubIcon repository="https://github.com/hcsm/FrwkBootCamp-FrontEnd" height="48px" width="48px" />
            <NotificationsIcon />
            <SidebarRight />
          </Stack>
        </Stack>
      </Right>
    </WrapperHeader>
  )
}