// @flow
import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import { FieldError, FieldValues, UseFormRegister } from 'react-hook-form'
import { Select } from './Select'
type Props = {
  type: string
  placeholder: string
  name: string
  register: UseFormRegister<FieldValues>
  error?: FieldError
}

export const InputEmail = (props: Props) => {
  const options = ['@frwk.com.br', '@frameworksystem.com']
  return (
    <InputGroup className="mb-3">
      <Form.Control
        className={props.error ? 'is-invalid' : ''}
        placeholder={props.placeholder}
        type={props.type}
        {...props.register(props.name)}
      />
      <Select options={options} register={props.register} name="dominio" />
    </InputGroup>
  )
}
