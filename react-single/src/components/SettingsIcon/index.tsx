import React from 'react'
import { IconButton, Tooltip } from '@material-ui/core'
import GearIcon from '@material-ui/icons/SettingsOutlined'

type Props = {
  onClick: Function
}

const SettingsIcon = (props: Props) => {
  return (
    <Tooltip title="Configurações" enterDelay={300}>
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
        <GearIcon fontSize="small" />
      </IconButton>
    </Tooltip>
  )
}

export default SettingsIcon
