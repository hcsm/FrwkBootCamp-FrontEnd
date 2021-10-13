// @flow
import React, { useEffect } from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import { FieldValues, UseFormRegister, FieldError } from 'react-hook-form'
import { useToastError } from '../hooks/hooks'
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
  useEffect(() => {
    useToastError(props?.error?.message)
  }, [props?.error])
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
