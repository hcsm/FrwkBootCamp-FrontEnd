import React, { useState } from 'react'
import db from '../../../../../assets/db.json'
import IconCircle from '../../../../../components/IconCircle'
import {
  Button,
  Header,
  IconWrapper,
  Image,
  Title,
  WrapperTitle
} from './styles'

type Props = {
  toggle?: Function | undefined
}

export const HeaderAside = ({ toggle }: Props) => {
  const [data] = useState(db)
  const { sendfoto, cadastro } = data

  return (
    <Header>
      {toggle && (
        <IconWrapper className="ms-auto pointer" onClick={() => toggle()}>
          <IconCircle icon="Clear" color="white" />
        </IconWrapper>
      )}
      <Image src={sendfoto[0].value} alt="imagem de perfil" />
      <WrapperTitle>
        <Title>
          {cadastro[0].nome}
          <Button>
            <IconCircle
              color="white"
              borderColor="#7900DF"
              icon="Edit"
              backgroundColor="#7900DF"
              hasShadow
            />
          </Button>
        </Title>
      </WrapperTitle>
    </Header>
  )
}
