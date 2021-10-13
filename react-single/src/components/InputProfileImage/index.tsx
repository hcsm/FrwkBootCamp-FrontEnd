import React from 'react'
import { FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form'
import styled from 'styled-components'
import UploaderModal from './UploaderModal'

const AvatarImage = styled.div<{ value: string }>`
  width: 150px;
  height: 150px;
  margin: auto;
  border-radius: 100%;
  background-image: url(${props => props.value});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border: 1pt solid ${props => props.color};
  color: ${props => (props.value ? 'transparent' : props.color)};
  text-align: center;
  vertical-align: middle;
  line-height: 150px;

  &:hover {
    cursor: pointer;
    transition: 1s;
    filter: brightness(80%);
    background-image: linear-gradient(
        rgba(255, 255, 255, 0.24),
        rgba(255, 255, 255, 0.315)
      ),
      url(${props => props.value});
    color: ${props => {
      console.warn(props)
      return props.color
    }};
  }
`

const Container = styled.div`
  display: block;
  position: relative;
`

type Props = {
  type: string
  name: string
  color: string
  register: UseFormRegister<FieldValues>
  setFormValue: UseFormSetValue<FieldValues>
  value?: string
  readOnly?: boolean | false
  mask?: string
}

export const InputProfileImage = (props: Props) => {
  props.register(props.name)
  const [modalShow, setModalShow] = React.useState(false)

  return (
    <Container className="mb-3">
      <AvatarImage
        value={props.value!}
        onClick={() => setModalShow(true)}
        color={props.color}
      >
        {props.value ? 'Alterar foto' : 'Insira sua foto'}
      </AvatarImage>
      <UploaderModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        setFormValue={props.setFormValue}
      />
    </Container>
  )
}
