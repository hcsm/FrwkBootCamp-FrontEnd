import React, { useState } from 'react'

import IconCircle from '../../../../../components/IconCircle'
import db from '../../../../../assets/db.json'

import { Header, Image, WrapperTitle, Title, Button } from './styles'

type Props = {}

export const HeaderAside = (props: Props) => {
  const [data] = useState(db)
  const { sendfoto, cadastro } = data

  return (
    <Header>
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
