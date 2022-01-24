import styled from 'styled-components'
import { DivWithScroll } from '../../styles/global'

export const WrapperDetail = styled.div``

export const WrapperHeader = styled.div`
  display: flex;
`

export const WrapperAside = styled.div`
  height: calc(100vh - 76px);
  display: flex;
  aside::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 850px) {
    display: none;
  }
`

export const WrapperContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

export const WrapperSection = styled.section`
  height: calc(100vh - 75px);
  width: 100%;
`
