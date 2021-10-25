import React from 'react'

import { Wrapper, Title, WrapperBadge, Badge } from './styles'

type Props = {
  id: number
  title: string
  stacks: Array<{
    value: string
    label: string
  }>
  className?: string
}

export const StackCard = (props: Props) => {
  return (
    <Wrapper className={props.className}>
      <Title>{props.title}</Title>
      <WrapperBadge>
        {
          props.stacks.map( ( stack ) => (
              <Badge title={stack.label} />
            )
          )
        }
      </WrapperBadge>
    </Wrapper>
  )
}
