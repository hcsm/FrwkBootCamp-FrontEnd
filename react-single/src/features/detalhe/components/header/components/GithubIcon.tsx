import * as React from 'react'
import { IconButton, Tooltip } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'

type Props = {
  repository: string
}

const GithubIcon = (props: Props) => {
  return (
    <Tooltip title="Repositório no GitHub" enterDelay={300}>
      <IconButton
        component="a"
        color="inherit"
        href={props.repository}
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
        <GitHubIcon fontSize="small" />
      </IconButton>
    </Tooltip>
  )
}

export default GithubIcon
