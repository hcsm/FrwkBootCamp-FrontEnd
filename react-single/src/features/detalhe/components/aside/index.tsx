import React from 'react'
import { HeaderAside } from './header-aside/HeaderAside'
import { Stack } from './stack/Stack'
import { WrapperAside } from './styles'

export const Aside = () => {
  return (
    <WrapperAside>
      <HeaderAside />
      <Stack />
    </WrapperAside>
  )
}
