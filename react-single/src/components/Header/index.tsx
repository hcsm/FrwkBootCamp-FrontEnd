import Stack from '@material-ui/core/Stack'
import * as React from 'react'
import { useLocation } from 'react-router'
import GithubIcon from '../ButtonGit'
import GoHomeIcon from '../GoHomeIcon'
import If from '../If'
import NotificationsIcon from '../NotificationsIcon'
import SidebarLeftButton from '../SidebarLeftButton'
import SidebarRight from '../SidebarRight'
import { HeaderTitle, Left, Right, WrapperHeader } from './styles'

type Props = {}

export const Header = (props: Props) => {
  const location = useLocation()
  return (
    <WrapperHeader className="WrapperHeader">
      <Left className="Left">
        <SidebarLeftButton />
        <a href="/#/detalhe/feed">
          <HeaderTitle className="HeaderTitle">Framebook</HeaderTitle>
        </a>
      </Left>

      <Right className="Right">
        <Stack direction="row" spacing={5}>
          <Stack direction="row" spacing={2}>
            <If test={location.pathname != '/detalhe/feed'}>
              <GoHomeIcon
                location="/#/detalhe/feed"
                height="48px"
                width="48px"
              />
            </If>
            <GithubIcon
              repository="https://github.com/hcsm/FrwkBootCamp-FrontEnd"
              height="48px"
              width="48px"
            />
            <NotificationsIcon />
            <SidebarRight />
          </Stack>
        </Stack>
      </Right>
    </WrapperHeader>
  )
}
