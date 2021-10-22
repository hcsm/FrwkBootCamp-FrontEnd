import styled from 'styled-components'
import Chip from '@material-ui/core/Chip'

export const Wrapper = styled.div`
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

export const Title = styled.h4`
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
