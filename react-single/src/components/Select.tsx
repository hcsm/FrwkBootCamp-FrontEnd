import React from 'react'
import { Form } from 'react-bootstrap'
import { FieldValues, UseFormRegister } from 'react-hook-form'

type Props = {
  options: string[]
  register: UseFormRegister<FieldValues>
  name: string
}

export function Select(props: Props) {
  const options = props.options.map((option, i) => {
    return (
      <option key={i} value={option}>
        {option}
      </option>
    )
  })

  return (
    <Form.Select {...props.register(props.name)} style={{ fontSize: '13px' }}>
      {options}
    </Form.Select>
  )
}
