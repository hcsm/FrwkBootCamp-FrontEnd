import React from 'react'
import { Drawer } from '@material-ui/core'
import MenuIcon from './components/MenuIcon'
import { Aside } from '../../features/detalhe/components/aside'
import { WrapperIcon } from './styles'

type Props = {}

const SidebarLeftButton = (props: Props) => {
  const [isOpen, toggleSidebar] = React.useState(false)
  return (
    <>
      <WrapperIcon>
        <MenuIcon onClick={() => toggleSidebar} />
      </WrapperIcon>
      <Drawer
        sx={{
          '& .MuiDrawer-paper': { width: '280px',height: '100vh' }
        }}
        className=".d-none .d-md-block .d-lg-none"
        anchor="left"
        open={isOpen}
        onClose={() => toggleSidebar(false)}
      >
        {/* <Content toggle={() => toggleSidebar(!isOpen)} /> */}
        <Aside toggle={() => toggleSidebar(!isOpen)} />
      </Drawer>
    </>
  )
}
export default SidebarLeftButton
