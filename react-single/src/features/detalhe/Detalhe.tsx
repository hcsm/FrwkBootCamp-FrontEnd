import React from 'react'
import styled from 'styled-components'

import {
  WrapperDetail,
  WrapperHeader,
  WrapperContent,
  WrapperAside,
  WrapperSection,
} from './styles'

import { Header } from './components/header/Header'
import { Card }  from './components/card/Card'
import { Feed } from './components/feed/Feed'

type Props = {}

export const Detalhe = (props: Props) => {

  return (
      <WrapperDetail>
        <WrapperHeader><Header /></WrapperHeader>
        <WrapperContent>
          <WrapperAside>
            <Card />
          </WrapperAside>
          <WrapperSection>
            <Feed/>
          </WrapperSection>
        </WrapperContent>
      </WrapperDetail>
  )
}
