import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import ReactInputMask from 'react-input-mask'

type Props = {
  type: string
  label: string
  name: string
  register: UseFormRegister<FieldValues>
  value?: string
  readOnly?: boolean | false
  mask?: string
}
export function Input(props: Props) {
  const register = props.register(props.name)
  return (
    <FloatingLabel className="mb-3" label={props.label}>
      <ReactInputMask
        mask={props.mask || ''}
        onChange={register.onChange}
        onBlur={register.onBlur}
        readOnly={props.readOnly}
        defaultValue ={props?.value}
      >
        {() => (
          <Form.Control
            type={props.type}
            {...register}
            readOnly={props.readOnly}
          />
        )}
      </ReactInputMask>
    </FloatingLabel>
  )
}
