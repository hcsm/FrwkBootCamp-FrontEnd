import button from 'react'
import { Card, CardContent, CardHeader, CardMedia } from '@material-ui/core'
import Button from '../../../../../components/Button'
import { Chip } from '../../../../../components/Chip/Chip'
import './Cards.css'
import { DEFAULT_PHOTO } from '../../../../../services/Enums'
import { useHistory } from 'react-router-dom'
import { UserType } from '../../../../../types/cadastro'

export function Cards(props: Partial<UserType>) {
  const history = useHistory()

  const stacks =  props.stackAprender ? props.stackAprender.map((stack, i) => {
    return <Chip key={i} title={stack.nome} />
  }) : []

  async function handleNavigate(id: string): Promise<void> {
    await history.push({pathname: '/perfil', search: id })
  }

  return (
    <Card className="card">
      <CardHeader title={props.nome} />
      <CardMedia
        className="img"
        component="img"
        image={props?.foto?.value ?? DEFAULT_PHOTO}
        alt=""
      />

      <CardContent>
        <div className="btnDiv">
          <Button onClick={() => {handleNavigate(String(props.professionalId))}}>Ver mais</Button>
        </div>
        <div className="stacks">{stacks}</div>
      </CardContent>
    </Card>
  )
}
