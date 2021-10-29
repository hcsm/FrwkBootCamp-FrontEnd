import * as React from 'react'
import { Badge, IconButton, Tooltip } from '@material-ui/core'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'

type Props = {}

const NotificationsIcon = (props: Props) => {
  return (
    <Tooltip title="Notificações" enterDelay={300}>
      <IconButton
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
        <Badge
          badgeContent={100}
          max={9}
          sx={{ '& .MuiBadge-badge': { backgroundColor: 'red' } }}
        >
          <NotificationsNoneIcon fontSize="small" />
        </Badge>
      </IconButton>
    </Tooltip>
  )
}

export default NotificationsIcon
