// @flow
import React from 'react'
// import IconCircle from '../../../../components/IconCircle'
import Content from './components/Content'
import { Drawer } from '@material-ui/core'
import SettingsIcon from '../header/components/SettingsIcon'
// import styled from 'styled-components'

type Props = {}

// const Button = styled.button`
//   background-color: transparent;
//   border: 0;
// `

const SidebarRight = (props: Props) => {
  const [isOpen, toggleSidebar] = React.useState(false)
  return (
    <>
      <SettingsIcon onClick={() => toggleSidebar} />
      {/* <Button type="button" onClick={() => toggleSidebar(!isOpen)}>
        <IconCircle icon="Settings" iconClass="fs-2" color="white" />
      </Button> */}
      <Drawer
        sx={{ '& .MuiDrawer-paper': { width: '20%' } }}
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
