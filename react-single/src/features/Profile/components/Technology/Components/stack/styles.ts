import styled from 'styled-components'
import Chip from '@material-ui/core/Chip'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`
export const BorderHeight = styled.div`
  width: 0px;
  height: 219px;
  left: 878px;
  margin-top: 58px;
  border: 2px solid #A2A2A2;
`

export const WrapperTitle = styled.div`
  padding: 28px 4px 0px 4px;
`

export const Title = styled.text`
  margin-left: 43px;
  width: 176px;
  height: 38px;
  left: 45px;
  top: 43px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 37px;
  color: #FFFFFF;
`

export const Button = styled.button`
  padding: 0;
  margin-left: 14px;
  background-color: transparent;
  border: none;
`

export const WrapperStacksBox = styled.div`
  width: 220px;
  min-height: 121px;
  border: 1px solid #0AF585;
  border-radius: 17px;
`

export const WrapperBadge = styled.div`
  padding: 8px;
  display: flex;
  flex-wrap: wrap;
`

export const TitleBadge = styled.h2`
  font-family: Roboto;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #0AF585;
  margin-top: 17px;
  margin-left: 18px;
`

export const Badge = styled(Chip)`
  margin: 0.25em 0.6em;
`
