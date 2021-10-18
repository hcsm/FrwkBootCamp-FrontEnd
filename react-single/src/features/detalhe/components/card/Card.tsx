import React, { useState } from 'react'

import IconCircle from '../../../../components/IconCircle'
import db from '../../../../assets/db.json'

import {
  WrapperCard,
  Header,
  Body,
  WrapperImage,
  WrapperTitle,
  Title,
  Button,
  WrapperStacksBox,
  WrapperBadge,
  TitleBadge,
  Badge,
} from './styles'

type Props = {}

export const Card = (props: Props) => {
  const [ data ] = useState(db)

  const { 
    sendfoto,
    cadastro, 
    perfil
  } = data

  console.log(data)

  return (
    <WrapperCard>
      <Header>
        <WrapperImage src={sendfoto[0].value} alt='imagem de perfil'/>
        <WrapperTitle>
          <Title>
            { cadastro[0].nome }
            <Button>
              <IconCircle color="white" borderColor="#7900DF" icon="Edit" backgroundColor="#7900DF" hasShadow/>
            </Button>

          </Title>
        </WrapperTitle>
      </Header>
      <Body>
          <WrapperStacksBox>
            <TitleBadge>Principais stacks</TitleBadge>
            <WrapperBadge>
              {
                perfil[0].stackExperiencia.map( ( stack ) => (
                    <Badge label={stack.label} color='primary' />
                  )
                )
              }
            </WrapperBadge>
          </WrapperStacksBox>
          <WrapperStacksBox className='mt'>
            <TitleBadge>Aprendizado</TitleBadge>
            <WrapperBadge>
              {
                perfil[0].stackAprender.map( ( stack ) => (
                    <Badge label={stack.label} color='primary' />
                  )
                )
              }
            </WrapperBadge>
          </WrapperStacksBox>
      </Body>
    </WrapperCard>
  )
}
