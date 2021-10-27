import React, { useState } from 'react'

import StackCard from '../stack-card'

import db from '../../../../../../assets/db.json'

import { Wrapper, Title, BorderHeight } from './styles'

type Props = {}

const Stack = (props: Props) => {
  const [data] = useState(db)
  const { cadastro, perfil } = data

  return (
    <div className='col-12'  >
      <Title>Tecnologias</Title>
      <Wrapper className="py-4">
        <div className="col-12 col-md-5 ">
          <StackCard
            id={cadastro[0].id}
            title="Tenho experiência"
            stacks={perfil[0].stackExperiencia}
          />
        </div>
        <BorderHeight/>
        <div className="col-12 col-md-5">
          <StackCard
            id={cadastro[0].id}
            title="Estou estudando"
            stacks={perfil[0].stackExperiencia}
          />
        </div>
      </Wrapper>
    </div>
  )
}

export default Stack
