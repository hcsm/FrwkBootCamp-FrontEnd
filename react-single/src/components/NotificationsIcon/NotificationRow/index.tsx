import React from 'react'
import { IconButton } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { DEFAULT_PHOTO } from '../../../services/Enums'

import {
  Container,
  Image,
  Body,
  Name,
  Title,
  Message,
  IconButtonWrapper,
} from './styles'

type Props = {
  name: string
  title: string
  message: string
  image?: string
}

const NotificationRow = (props: Props) => {
  const [expanded, setExpanded] = React.useState(false)
  const [charactersAllowed, setCharactersAllowed] = React.useState(100)

  const handleExpandClick = () => {
    setCharactersAllowed(!expanded ? Infinity : 100)
    setExpanded(!expanded)
  }

  const truncate = (str: string, n: number) => {
    return str.length > n ? str.substr(0, n - 1) + '...' : str
  }

  return (
    <Container>
      <Image src={props.image ?? DEFAULT_PHOTO} alt={props.name} />

      <Body>
        <Name>{props.name}</Name>
        <Title>{props.title}</Title>
        <Message $rotate={expanded}>
          {truncate(props.message, charactersAllowed)}
        </Message>
      </Body>

      <IconButtonWrapper $rotate={expanded} onClick={handleExpandClick}>
        <IconButton
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Show more"
          sx={{ color: 'white' }}
        >
          <ExpandMoreIcon />
        </IconButton>
      </IconButtonWrapper>
    </Container>
  )
}

export default NotificationRow
