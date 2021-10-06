// @flow
import React from 'react'
import {
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form'
import { Input } from '../../components/Input'
import { InputCep } from '../../components/InputCep'
import { InputEmail } from '../../components/InputEmail'
import { CadastroType } from '../../types/cadastro'

type Props = {
  register: UseFormRegister<FieldValues>
  setFormValue: UseFormSetValue<FieldValues>
  watch: UseFormWatch<CadastroType>
}

export const CadastroBasicoForm = ({
  register,
  setFormValue,
  watch,
}: Props) => {
  return (
    <>
      <Input register={register} type="text" label="Nome" name="nome" />
      <InputEmail
        register={register}
        type="text"
        placeholder="Email frameworker"
        name="inicioEmail"
      />
      <InputCep
        value={watch('cep', '')}
        mask="99999-999"
        register={register}
        type="text"
        label="CEP"
        name="cep"
        setFormValue={setFormValue}
      />
      <Input
        register={register}
        type="text"
        label="Cidade"
        name="cidade"
      />
      <Input
        register={register}
        type="text"
        label="Estado"
        name="uf"
      />
      <Input
        value={watch('telefone', '')}
        mask={ "(99) 9 9999-9999"}
        register={register}
        type="text"
        label="Telefone"
        name="telefone"
      />
    </>
  )
}
