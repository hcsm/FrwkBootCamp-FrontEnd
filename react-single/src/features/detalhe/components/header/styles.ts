import styled from 'styled-components'

export const WrapperHeader = styled.div`
  display: flex;
  flex-direction: row;
  height: 76px;
  width: 100%;
  color: #FFF;
  background-color: #070817;
  border-bottom: 1px solid #213054;
`

const RowDirection = styled.div`
  display: flex;
  align-items: center;
`

export const Left = styled(RowDirection)`
  width: 30%;
`

export const Right = styled(RowDirection)`
  justify-content: flex-end;
  width: 70%;
  margin-right: 24px;
`

export const SearchInput = styled.input`
  height: 48px;
  width: 410px;
  background: #0B0C22;
  border: 1px solid #213054;
  box-sizing: border-box;
  border-radius: 12px;
  color: #FFF;
  ::placeholder {
    color: #FFF;
  }
`

export const HeaderTitle = styled.h1`
  font-family: Rubik;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 47px;
  letter-spacing: 0em;
  text-align: left;
`


