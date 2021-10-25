import React, { useState } from 'react'

import { StackCard } from '../stack-card/StackCard'

import db from '../../../../../assets/db.json'

import { Wrapper } from './styles'
import { Box } from '@material-ui/system'

type Props = {}

export const Stack = (props: Props) => {
  const [data] = useState(db)
  const { cadastro, perfil } = data

  return (
    <Wrapper>
      <StackCard
        className="first"
        id={cadastro[0].id}
        title="Principais stacks"
        stacks={perfil[0].stackExperiencia}
      />
      <StackCard
        id={cadastro[0].id}
        title="Aprendizado"
        stacks={perfil[0].stackAprender}
      />
    </Wrapper>
  )
}
