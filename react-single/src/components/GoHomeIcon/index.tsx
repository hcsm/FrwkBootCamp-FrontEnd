import * as React from 'react'
import { IconButton, Tooltip } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'

type Props = {
  location: string
  height: string
  width: string
}

const GoHomeIcon = (props: Props) => {
  return (
    <Tooltip title="Ir para o feed" enterDelay={300}>
      <IconButton
        component="a"
        color="inherit"
        href={props.location}
        sx={{
          marginLeft: '10px',
          height: props.height,
          width: props.width,
          border: '1px solid rgb(23, 58, 94)',
          borderRadius: '13px',
          color: 'white',
          backgroundColor: '#0B0C22',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            color: 'white',
          },
        }}
      >
        <HomeIcon fontSize="small" />
      </IconButton>
    </Tooltip>
  )
}

export default GoHomeIcon
