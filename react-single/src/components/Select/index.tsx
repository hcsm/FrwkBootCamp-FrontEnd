import * as React from 'react'
import { Form } from 'react-bootstrap'
import { FieldValues, UseFormRegister } from 'react-hook-form'

type Props = {
  options: string[]
  register?: UseFormRegister<FieldValues>
  name: string
  value?: string
  onChange?: Function
}

export function Select(props: Props) {
  const options = props.options.map((option, i) => {
    return (
      <option key={i} value={option}>
        {option}
      </option>
    )
  })
  const changeFn = (e: any) => {
    if (props.onChange) {
      props.onChange(e.target.value)
    }
  }

  const register = props.register ? props.register(props.name) : undefined
  return (
    <Form.Select
      defaultValue={props?.value}
      onChange={props.onChange ? changeFn : register?.onChange}
      {...register}
      style={{ fontSize: '13px' }}
    >
      {options}
    </Form.Select>
  )
}
