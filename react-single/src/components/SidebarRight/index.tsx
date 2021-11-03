// @flow
import React from 'react'
import Content from './components/Content'
import { Drawer } from '@material-ui/core'
import SettingsIcon from '../SettingsIcon'

type Props = {}

const SidebarRight = (props: Props) => {
  const [isOpen, toggleSidebar] = React.useState(false)
  return (
    <>
      <SettingsIcon onClick={() => toggleSidebar} />
      <Drawer
        sx={{ '& .MuiDrawer-paper': { width: '250px' } }}
        anchor="right"
        open={isOpen}
        onClose={() => toggleSidebar(false)}
      >
        <Content toggle={() => toggleSidebar(!isOpen)} />
      </Drawer>
    </>
  )
}
export default SidebarRight