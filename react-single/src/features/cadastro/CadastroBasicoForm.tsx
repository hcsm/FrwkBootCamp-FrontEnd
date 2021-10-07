// @flow
import React from 'react'
import {
  DeepMap,
  FieldError,
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
  errors: DeepMap<FieldValues, FieldError>
}

export const CadastroBasicoForm = ({
  register,
  setFormValue,
  watch,
  errors
}: Props) => {
  return (
    <>
      <InputEmail
        register={register}
        type="text"
        placeholder="Email frameworker"
        name="inicioEmail"
        error={errors?.inicioEmail}
      />

      <Input error={errors?.nome} register={register} type="text" label="Nome" name="nome" />
      <InputCep
        value={watch('cep', '')}
        mask="99999-999"
        register={register}
        type="text"
        label="CEP"
        name="cep"
        error={errors?.cep}
        setFormValue={setFormValue}
      />
      <Input
        register={register}
        type="text"
        label="Cidade"
        name="cidade"
        error={errors?.cidade}
      />
      <Input
        register={register}
        type="text"
        label="UF"
        name="uf"
        error={errors?.uf}
      />
      <Input
        value={watch('telefone', '')}
        mask={ "(99) 9 9999-9999"}
        register={register}
        type="text"
        label="Telefone"
        name="telefone"
        error={errors?.telefone}
      />
       <Input error={errors?.senha} register={register} type="password" label="Senha" name="senha" />
      <Input error={errors?.confirmarSenha} register={register} type="password" label="Confirme sua senha" name="confirmarSenha" />
    </>
  )
}
