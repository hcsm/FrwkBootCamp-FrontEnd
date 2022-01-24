import React, { useState } from 'react'

import StackCard from '../stack-card'

import db from '../../../../../../assets/db.json'

import { Wrapper, Title, BorderHeight } from './styles'
import { useAppSelector } from '../../../../../../app/store'

type Props = {}

const Stack = (props: Props) => {
  const authUser = useAppSelector(state => state.authUser.data)
  return (
    <div className="col-12">
      <Title>Tecnologias</Title>
      <Wrapper className="py-4">
        <div className="col-12 col-md-5 ">
          <StackCard
            id={authUser.professionalId}
            title="Tenho experiência"
            stacks={authUser.stackExperiencia}
          />
        </div>
        <BorderHeight />
        <div className="col-12 col-md-5">
          <StackCard
            id={authUser.professionalId}
            title="Estou estudando"
            stacks={authUser.stackAprender}
          />
        </div>
      </Wrapper>
    </div>
  )
}

export default Stack
