// @flow
import * as React from 'react'
import styled from 'styled-components'
import IconCircle from '../../IconCircle'
import Menu from './Menu'

type Props = {
  toggle: Function
}

const Container = styled.div`
  background-color: #0a0c20;
  border: 1px solid #213054;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`
const Title = styled.div`
  display: flex;
  align-items: baseline;
  color: white;
  padding: 20px;
  border-bottom: 1px solid #213054;
  .pointer {
    cursor: pointer;
  }
`
const IconWrapper = styled.span`
  font-size: 24px;
`
const Content = ({ toggle }: Props) => {
  return (
    <>
      <Container>
        <Title>
          <h4>Opções</h4>
          <IconWrapper className="ms-auto pointer" onClick={() => toggle()}>
            <IconCircle icon="Clear" color="white" />
          </IconWrapper>
        </Title>
        <Menu />
      </Container>
    </>
  )
}

export default Content
