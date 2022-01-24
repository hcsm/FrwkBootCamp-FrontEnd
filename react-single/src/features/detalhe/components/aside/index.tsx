import React from 'react'
import { HeaderAside } from './header-aside/HeaderAside'
import { Stack } from './stack/Stack'
import { WrapperAside } from './styles'

type Props = {
  toggle?: Function | undefined
}

export const Aside = ({ toggle }: Props) => {
  return (
    <WrapperAside>
      <HeaderAside toggle={toggle || undefined} />
      <Stack />
    </WrapperAside>
  )
}
