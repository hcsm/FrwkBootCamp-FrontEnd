import React, { useState } from 'react'

import { Header } from './components/header'
import { HeaderAside } from './components/aside/header-aside/HeaderAside'
import { Stack }  from './components/aside/stack/Stack'
import { Feed } from './components/feed/Feed'

import {
  WrapperDetail,
  WrapperHeader,
  WrapperAside,
  WrapperContent,
  WrapperSection,
} from './styles'

type Props = {}

export const Detalhe = (props: Props) => {
  return (
      <WrapperDetail>
        <WrapperHeader><Header /></WrapperHeader>
        <WrapperContent>
          <WrapperAside>
            <HeaderAside />
            <Stack />
          </WrapperAside>
          <WrapperSection>
            <Feed/>
          </WrapperSection>
        </WrapperContent>
      </WrapperDetail>
  )
}
