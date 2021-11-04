import { Card, CardContent, CardHeader, CardMedia } from '@material-ui/core'
import Button from '../../../../../components/Button'
import { Chip } from '../../../../../components/Chip/Chip'
import './Cards.css'

type Props = {
  stacks: String[]
  name: String
  userFoto: {
    id: number
    value?: string
  }
}

export function Cards(props: Props) {
  const stacks = props.stacks.map((stack, i) => {
    return <Chip key={i} title={stack} />
  })
  return (
    <Card className="card">
      <CardHeader title={props.name} />
      <CardMedia
        className="img"
        component="img"
        image={props.userFoto.value}
        alt=""
      />

      <CardContent>
        <div className="btnDiv">
          <Button type="submit">Ver mais</Button>
        </div>
        <div className="stacks">{stacks}</div>
      </CardContent>
    </Card>
  )
}
