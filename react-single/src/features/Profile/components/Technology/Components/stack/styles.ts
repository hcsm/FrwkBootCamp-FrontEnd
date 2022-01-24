import styled from 'styled-components'
import Chip from '@material-ui/core/Chip'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
`
export const BorderHeight = styled.div`
  width: 0px;
  height: 219px;
  margin-top: 58px;
  border: 2px solid #a2a2a2;

  @media (max-width: 800px) {
    width: 80%;
    height: 0px;
    margin-bottom: 58px;
  }
`

export const WrapperTitle = styled.div`
  padding: 28px 4px 0px 4px;
`

export const Title = styled.h2`
  margin-top: 43px;
  margin-left: 45px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: 37px;
  color: #ffffff;
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
  border: 1px solid #0af585;
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
  color: #0af585;
  margin-top: 17px;
  margin-left: 18px;
`

export const Badge = styled(Chip)`
  margin: 0.25em 0.6em;
`
