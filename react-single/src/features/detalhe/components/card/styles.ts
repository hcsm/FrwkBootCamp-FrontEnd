import styled from 'styled-components'
import Chip from '@material-ui/core/Chip'

export const WrapperCard = styled.div`
  padding-top: 8px;
  border-right: 1px solid #213054;
`

export const Header = styled.div`
  height: 314px;
`

export const Body = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  justify-content: space-around;
  min-height: 545px;
  background-color: #13142C;
  border-top-right-radius: 100px;
`

export const WrapperImage = styled.div`
  height: 141px;
  width: 141px;
  margin: 0 auto;
  border-radius: 141px;
  background-color: #FFF;
`

export const WrapperTitle = styled.div`
  padding: 28px 4px 0px 4px;
`

export const Title = styled.p`
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: 0em;
  color: #FFF;
`

export const Button = styled.button`
  padding: 0;
  margin-left: 14px;
  background-color: transparent;
  border none;
`

export const WrapperStacksBox = styled.div`
  width: 188px;
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
