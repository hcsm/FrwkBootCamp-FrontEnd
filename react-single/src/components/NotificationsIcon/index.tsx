import * as React from 'react'
import {
  Badge,
  Divider,
  IconButton,
  Popover,
  Tooltip,
  Typography,
} from '@material-ui/core'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import NotificationRow from './NotificationRow'
import CloseIcon from '@material-ui/icons/Close';

import { CloseIconWrapper } from './styles'

type Props = {}

const notifications = [
  {
    id: 0,
    name: 'Jorge Lopes',
    title: 'Titulo da menssagem',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos exercitationem nesciunt nostrum amet quod quam blanditiis repellat error distinctio libero excepturi consectetur dolorum laboriosam omnis consequuntur dicta, quae dolore atque.',
    time: '4 minutes ago',
  },
  {
    id: 1,
    name: 'Jorge Lopes',
    title: 'Titulo da menssagem',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos exercitationem nesciunt nostrum amet quod quam blanditiis repellat error distinctio libero excepturi consectetur dolorum laboriosam omnis consequuntur dicta, quae dolore atque.',
    time: '4 minutes ago',
  },
  {
    id: 2,
    name: 'Jorge Lopes',
    title: 'Titulo da menssagem',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos exercitationem nesciunt nostrum amet quod quam blanditiis repellat error distinctio libero excepturi consectetur dolorum laboriosam omnis consequuntur dicta, quae dolore atque.',
    time: '4 minutes ago',
  },
]
const qdtNotifications = notifications.length

const NotificationsIcon = (props: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const open = Boolean(anchorEl)
  const id = open ? 'notifications-popover' : undefined

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Tooltip title="Notificações" enterDelay={300}>
        <IconButton
          color="inherit"
          onClick={handleClick}
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
            badgeContent={qdtNotifications}
            max={9}
            sx={{ '& .MuiBadge-badge': { backgroundColor: 'red' } }}
          >
            <NotificationsNoneIcon fontSize="small" />
          </Badge>
        </IconButton>
      </Tooltip>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >

        <Typography component="div" sx={{ backgroundColor: '#213054', maxWidth: "500px" }} >
          <CloseIconWrapper>
            <IconButton
              onClick={handleClose}
              aria-label="Close"
              sx={{ color: "white" }}
            >
              <CloseIcon />
            </IconButton>
          </CloseIconWrapper>
          {
            notifications.map((notification, index) => (
              <div key={index}>
                <NotificationRow key={`notification-${notification.id}`} {...notification} />
                {index !== notifications.length - 1 && <Divider key={`divider-${index}`} />}
              </div>
            ))
          }
        </Typography>
      </Popover>
    </>
  )
}

export default NotificationsIcon
