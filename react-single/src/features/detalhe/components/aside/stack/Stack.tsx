import React, { useState } from 'react'

import { StackCard } from '../stack-card/StackCard'

import db from '../../../../../assets/db.json'

import { Wrapper } from './styles'
import { Box } from '@material-ui/system'
import { useAppSelector } from '../../../../../app/store'

type Props = {}

export const Stack = (props: Props) => {
  const authUser = useAppSelector(state => state.authUser.data)

  return (
    <Wrapper>
      <StackCard
        className="first"
        id={authUser.professionalId}
        title="Principais stacks"
        stacks={authUser?.stackExperiencia?.slice(0, 4)}
      />
      <StackCard
        id={authUser.professionalId}
        title="Aprendizado"
        stacks={authUser?.stackAprender?.slice(0, 4)}
      />
    </Wrapper>
  )
}
