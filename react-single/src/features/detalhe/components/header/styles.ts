import styled from 'styled-components'

export const WrapperHeader = styled.div`
  display: flex;
  flex-direction: row;
  height: 76px;
  width: 100%;
  color: #fff;
  background-color: #070817;
  border-bottom: 1px solid #213054;
`

const RowDirection = styled.div`
  display: flex;
  align-items: center;
`

export const Left = styled(RowDirection)`
  width: 30%;
  justify-content: center;

  @media (max-width: 850px) {
    display: none;
  }
`

export const Right = styled(RowDirection)`
  justify-content: flex-end;
  width: 70%;
  margin-right: 24px;

  @media (max-width: 850px) {
    width: 100%;
  }
`

export const WrapperSearch = styled.div`
  min-width: 400px;

  @media (max-width: 650px) {
    min-width: 100px;
  }
`

export const HeaderTitle = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap');
  font-family: 'Rubik', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 47px;
  text-align: center;
  margin: 0;

  text-shadow: 4px 0px 11px rgb(255 255 255);
`
