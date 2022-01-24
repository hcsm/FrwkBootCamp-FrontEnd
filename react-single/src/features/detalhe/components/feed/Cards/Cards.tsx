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

  const stacksAprender =  props.stackAprender ? props.stackAprender.map((stack, i) => {
    return <Chip key={i} title={stack.nome} />
  }) : []

  function handleNavigate(id: string) {
    history.push({pathname: '/perfil', search: id, state:'read'})
  }

  const stackExperiencia = props.stackExperiencia ? props.stackExperiencia.map((stack, i) => {
    return <Chip key={i} title={stack.nome} />
  }) : []

  return (
    <Card className="card">
      <CardHeader title={props.nome} />
      <CardMedia
        className="img"
        component="img"

        image={props?.foto?.value ?? DEFAULT_PHOTO}

        alt=""
      />
      <div className="btnDiv">
          <Button onClick={() => {handleNavigate(String(props.professionalId))}}>Ver mais</Button>
      </div>
      <CardContent>
        <div className="d-flex flex-column">
          <h6 className="stacks-title">Especialidade:</h6>
          <div className="stacks">
            <Chip key={'especialidade'} title='Docker' />
          </div>
        </div>
        <div className="mt-1">
          <div className="d-flex flex-column">
            <h6 className="stacks-title">Stacks aprender:</h6>
            <div className="stacks">{stacksAprender}</div>
          </div>
          <div className="d-flex flex-column">
            <h6 className="stacks-title">Stacks experiencia:</h6>
            <div className="stacks">{stackExperiencia}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
