// @flow
import * as React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import { FieldError, FieldValues, UseFormRegister } from 'react-hook-form'

type Props = {
  label: string
  name: string
  register: UseFormRegister<FieldValues>
  value?: string
  className?: string
  readOnly?: boolean | false
}

export const TextArea = ({
  name,
  label,
  value,
  register,
  readOnly,
  className,
}: Props) => {
  return (
    <>
      <FloatingLabel controlId={name} label={label} className={className}>
        <Form.Control
          {...register(name)}
          readOnly={readOnly}
          as="textarea"
          style={{ height: '100px' }}
          value={value}
        />
      </FloatingLabel>
    </>
  )
}
