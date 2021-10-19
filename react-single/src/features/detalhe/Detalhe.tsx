import React, { useState } from 'react'

import { Header } from './components/header/Header'
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

<<<<<<< HEAD
import { Header } from './components/header/Header'
import { Card } from './components/card/Card'
import { Feed } from './components/feed/Feed'

=======
>>>>>>> 32e58b2de908c3b520739202b63cf481aaaa786a
type Props = {}

export const Detalhe = (props: Props) => {
  return (
<<<<<<< HEAD
    <WrapperDetail>
      <WrapperHeader><Header /></WrapperHeader>
      <WrapperContent>
        <WrapperAside>
          <Card />
        </WrapperAside>
        <WrapperSection>
          <Feed />
        </WrapperSection>
      </WrapperContent>
    </WrapperDetail>
=======
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
>>>>>>> 32e58b2de908c3b520739202b63cf481aaaa786a
  )
}
