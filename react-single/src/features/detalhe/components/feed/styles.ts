import styled from 'styled-components'
import { DivWithScroll } from '../../../../styles/global'

export const WrapperFeed = styled(DivWithScroll("&"))`
  background-color: #070817;
  height: calc(100vh - 75px);
  overflow: auto;
  width: 100%;
  padding: 2%;
  display: flex;
  flex-wrap: wrap;
  flex: 1
`
