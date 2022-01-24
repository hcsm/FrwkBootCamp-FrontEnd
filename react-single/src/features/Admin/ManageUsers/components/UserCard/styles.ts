import styled from 'styled-components'

export const Card = styled.div`
  border: solid 1px #213054;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  padding: 20px 10px;
  width: 80%;
  margin-bottom: 1.3em;
  & .name {
    font-size: 22px;
    line-height: 21px;
    color: #ffffff;
  }
`
export const Image = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`
export const NotifyForm = styled.div`
  & textarea {
    color: #ffffff !important;
    background-color: rgba(255, 255, 255, 0.08) !important;
    border: rgba(255, 255, 255, 0.08) !important;
  }
`
