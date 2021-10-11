// @flow
import axios from 'axios'
import React, { useEffect } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import {
  FieldError,
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form'
import ReactInputMask from 'react-input-mask'
import { useToastError } from '../hooks/hooks'
import { CepType } from '../types/cadastro'

type Props = {
  type: string
  label: string
  name: string
  value: string
  register: UseFormRegister<FieldValues>
  setFormValue: UseFormSetValue<FieldValues>
  mask?: string
  error?: FieldError
}

export const InputCep = (props: Props) => {
  const searchCep = (cep: string) => {
    if (cep.match('[0-9]{5}-[0-9]{3}')) {
      axios.get<CepType>(`https://viacep.com.br/ws/${cep}/json/`).then(resp => {
        props.setFormValue('cidade', resp.data.localidade)
        props.setFormValue('uf', resp.data.uf)
      })
    }
  }
  const register = props.register(props.name, {
    onChange: e => searchCep(e.target.value),
  })
  useEffect(() => {
    useToastError(props?.error?.message)
  }, [props?.error])
  return (
    <FloatingLabel className="mb-3" label={props.label}>
      <ReactInputMask
        defaultValue={props.value}
        mask={props.mask || ''}
        {...register}
      >
        {() => (
          <Form.Control
            className={props.error ? 'is-invalid' : ''}
            type={props.type}
            {...register}
          />
        )}
      </ReactInputMask>
    </FloatingLabel>
  )
}
