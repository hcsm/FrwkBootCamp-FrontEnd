import React from 'react'
import { IconButton, Tooltip } from '@material-ui/core'
import Menu from '@material-ui/icons/Menu'

type Props = {
  onClick: Function
}

const MenuIcon = (props: Props) => {
  return (
    <div>
      <Tooltip title="Menu" enterDelay={300}>
        <IconButton
          onClick={props.onClick()}
          color="inherit"
          sx={{
            p: '10px',
            height: '48px',
            width: '48px',
            border: '1px solid rgb(23, 58, 94)',
            borderRadius: '10px',
            color: 'white',
            backgroundColor: '#0B0C22',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              color: 'white',
            },
          }}
        >
          <Menu fontSize="small" />
        </IconButton>
      </Tooltip>
    </div>
  )
}

export default MenuIcon
