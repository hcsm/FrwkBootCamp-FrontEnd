import { Card, CardContent, CardHeader, CardMedia } from '@material-ui/core'
import Button from '../../../../../components/Button'
import { Chip } from '../../../../../components/Chip/Chip'
import './Cards.css'
import { DEFAULT_PHOTO } from '../../../../../services/Enums'
import { useHistory } from 'react-router'
type Props = {
  stacksAprender: String[]
  stackExperiencia: String[]
  especialidade: String
  name: String
  UserFoto: {
    id: number
    value?: string
  }
}

export function Cards(props: Props) {
  const stacksAprender = props.stacksAprender.map((stack, i) => {
    return <Chip key={i} title={stack} />
  })
  const stackExperiencia = props.stackExperiencia.map((stack, i) => {
    return <Chip key={i} title={stack} />
  })

  return (
    <Card className="card">
      <CardHeader title={props.name} />
      <CardMedia
        className="img"
        component="img"
        image={props.UserFoto?.value ?? DEFAULT_PHOTO}
        alt=""
      />

      <div className="btnDiv">
        <Button type="submit">Ver mais</Button>
      </div>
      <CardContent>
        <div className="d-flex flex-column">
          <h6 className="stacks-title">Especialidade:</h6>
          <div className="stacks">
            <Chip key={'especialidade'} title={props.especialidade} />
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
