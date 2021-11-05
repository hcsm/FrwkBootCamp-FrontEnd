// @flow
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Form, InputGroup } from 'react-bootstrap'
import { FieldError, FieldValues, UseFormRegister } from 'react-hook-form'
import singleSpaReact from 'single-spa-react'
import { Select } from './Select'
export type InputEmailProps = {
  type: string
  placeholder: string
  name: string
  register?: UseFormRegister<FieldValues>
  error?: FieldError
  value?: string
  dominio?: string
  onChange?: Function
  onSelectChange?: Function
}

export const InputEmail = (props: InputEmailProps) => {
  const options = ['@frwk.com.br', '@frameworksystem.com']
  const register = props.register ? props.register(props.name) : undefined
  const changeFn = (e: any) => {
    if (props.onChange) {
      props.onChange(e.target.value)
    }
  }
  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          className={props.error ? 'is-invalid' : ''}
          placeholder={props.placeholder}
          type={props.type}
          {...register}
          defaultValue={props.value}
          onChange={props.onChange ? changeFn : register?.onChange}
        />
        <Select
          options={options}
          register={props.register}
          name="dominio"
          value={props?.dominio}
          onChange={props.onSelectChange ? props.onSelectChange : undefined}
        />
      </InputGroup>
    </>
  )
}

export const config = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: InputEmail,
})
