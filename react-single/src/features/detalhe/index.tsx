import * as React from 'react'
import { Header } from '../../components/Header'
import HomeRoutes from '../../routes/HomeRoutes'
import { Aside } from './components/aside'
import {
  WrapperAside,
  WrapperContent,
  WrapperDetail,
  WrapperHeader,
  WrapperSection
} from './styles'

type Props = {}

export const Detalhe = (props: Props) => {
  return (
    <WrapperDetail>
      <WrapperHeader>
        <Header />
      </WrapperHeader>
      <WrapperContent>
        <WrapperAside>
          <Aside />
        </WrapperAside>
        <WrapperSection>
            <HomeRoutes />
        </WrapperSection>
      </WrapperContent>
    </WrapperDetail>
  )
}
