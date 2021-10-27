import styled from 'styled-components'

export const WrapperDetail = styled.div`
  background-color: #c2c4e2;
`

export const WrapperHeader = styled.div`
  display: flex;
`

export const WrapperAside = styled.div`
  display: flex;
  height: calc(100vh - 76px);

  @media (max-width: 850px) {
    display: none;
  }
`

export const WrapperContent = styled.div`
  display: flex;
  background-color: gray;
`

export const WrapperSection = styled.section`
  flex: 10;
`
