import styled from 'styled-components'
import { DivWithScroll } from '../../../../styles/global'

export const WrapperFeed = styled(DivWithScroll('.list'))`
  background-color: #070817;
  height: calc(100vh - 75px);
  width: 100%;
  padding: 2%;
  overflow: auto;
  & .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    overflow: auto;
  }
`
