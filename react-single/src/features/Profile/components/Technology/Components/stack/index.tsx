import React, { useState } from 'react'

import StackCard from '../stack-card'

import db from '../../../../../../assets/db.json'

import {
  Wrapper,
  Title,
  BorderHeight,
  } from './styles'

type Props = {}

const Stack = (props: Props) => {
  const [ data ] = useState(db)
  const { cadastro, perfil } = data

  return (
    <>
      <Title>Tecnologias</Title>
      <Wrapper>
        <StackCard
          id={cadastro[0].id}
          title='Tenho experiência'
          stacks={perfil[0].stackExperiencia}
        />
       <BorderHeight/>
       <StackCard
          id={cadastro[0].id}
          title='Estou estudando'
          stacks={perfil[0].stackExperiencia}
        />
      </Wrapper>
   </>   
  )
}

export default Stack