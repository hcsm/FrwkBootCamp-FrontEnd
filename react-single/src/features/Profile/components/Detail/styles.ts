import styled from 'styled-components'

export const Container = styled.div``

export const DetailContainer = styled.div`
  position: relative;
  top: -71px;
  background-color: #0b0c22;
  border: 4px solid #213054;
  box-sizing: border-box;
  border-radius: 5px;
`

export const Image = styled.img`
  width: 214px;
  height: 210px;
  margin-left: 60px;
  margin-top: 20px;
  border-radius: 372.5px;
`

export const Name = styled.div`
  width: 320px;
  margin-left: 10px;
  margin-top: 28px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 37px;
  color: #ffffff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Phone = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  width: 320px;
  margin-left: 10px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
  justify-content: center;
  margin-top: 5px;
`

export const City = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  width: 320px;
  margin-left: 10px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
  justify-content: center;
  margin-top: 5px;
`

export const Email = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  width: 320px;
  margin-left: 10px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
  justify-content: center;
  margin-top: 5px;
`
export const Button = styled.button`
  padding: 0;
  margin-right: 5px;
  background-color: transparent;
  border: none;
  display: flex;
  margin-left: 5px;
  margin-top: 5px;
`

export const Input = styled.input`
  max-width: 250px;
  background-color: transparent !important;
  border: 0 !important;
  outline: 0;

  & {
    border-bottom: 1px solid #0af585 !important;
    background-color: transparent !important;
  }
  &[readonly] {
    background-color: transparent !important;
    border: 0 !important;
  }

`
