// @flow
import { yupResolver } from '@hookform/resolvers/yup'
import axios, { Method } from 'axios'
import { error } from 'console'
import * as React from 'react'
import { FieldError, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import { setUser, useAppDispatch } from '../../../app/store'
import If from '../../../components/If'
import { Input } from '../../../components/Input'
import { InputCep } from '../../../components/InputCep'
import { InputEmail } from '../../../components/InputEmail'
import { BASE_URL } from '../../../services/Enums'
import { CadastroType } from '../../../types/global'
import { useAppSelector } from './../../../app/store'
import { FormButtons } from './FormButtons'

type Props = {
  activeStep: number
  next: Function
  back: Function
}
export const FormCadastro = ({ activeStep, next, back }: Props) => {
  const dispatch = useAppDispatch()
  const authUser = useAppSelector(state => state.authUser)
  const validatedFields = {
    inicioEmail: yup.string().required('Email invalido'),
    senha: yup.string().required('Senha é obrigatoria'),
    confirmarSenha: yup
      .string()
      .required('Confirme sua senha')
      .oneOf([yup.ref('senha'), null], 'As senhas devem ser iguais'),
    nome: yup.string().required('O campo nome é obrigatorio'),
    cidade: yup.string().required('O campo cidade é obrigatorio'),
    uf: yup.string().required('O campo UF é obrigatorio'),
    cep: yup
      .string()
      .matches(/[0-9]{5}-[0-9]{3}/, 'CEP invalido')
      .required('CEP invalido'),
    telefone: yup
      .string()
      .matches(/(\(?\d{2}\)?\s)?(\d{4,5}\-\d{3})/, 'Telefone invalido'),
  }
  const schema = yup.object(validatedFields).required()
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useForm<CadastroType>({
    resolver: yupResolver<yup.AnyObjectSchema>(schema),
    defaultValues: authUser?.data,
    mode: 'onBlur',
  })
  const onSubmit = (dados: CadastroType) => {
    let method: Method = 'post'
    if (authUser?.data?.id) {
      dados.id = authUser.data.id
      method = 'put'
    }
    dados.email = dados.inicioEmail + dados.dominio
    const { foto, inicioEmail, dominio, cep, ...cadastro } = dados
    axios({
      url: `${BASE_URL}/cadastro/${dados.id ?? ''}`,
      method: method,
      data: cadastro,
    })
      .then(resp => {
        dispatch(setUser({ inicioEmail, dominio, cep, ...resp.data }))
        next()
      })
      .catch(error => toast.error('Falha em comunicar com o servidor'))
  }
  const onError = (errors: object) => {
    Object.values(errors).map(e => (e ? toast.error(e.message) : false))
  }
  const checkValid = async () => {
    toast.dismiss()
    if (
      activeStep === 0 &&
      (await trigger(['inicioEmail', 'senha', 'confirmarSenha']))
    ) {
      next()
    } else if (activeStep === 0) {
      onError(errors)
      return false
    } else {
      handleSubmit(onSubmit, onError)()
    }
  }

  return (
    <form className="needs-validation form" autoComplete="off">
      <If test={activeStep === 0}>
        <InputEmail
          error={errors?.inicioEmail}
          register={register}
          type="text"
          placeholder="Email frameworker"
          name="inicioEmail"
          value={watch('inicioEmail')}
          dominio={watch('dominio')}
        />
        <Input
          error={errors?.senha}
          register={register}
          type="password"
          label="Senha"
          name="senha"
          value={watch('senha')}
        />
        <Input
          error={errors?.confirmarSenha}
          register={register}
          type="password"
          label="Confirme sua senha"
          name="confirmarSenha"
          value={watch('confirmarSenha')}
        />
      </If>
      <If test={activeStep === 1}>
        <Input
          error={errors?.nome}
          register={register}
          type="text"
          label="Nome"
          name="nome"
          value={watch('nome')}
        />
        <Input
          value={watch('telefone')}
          mask={'(99) 9 9999-9999'}
          register={register}
          type="text"
          label="Telefone"
          name="telefone"
          error={errors?.telefone}
        />
        <InputCep
          value={watch('cep')}
          mask="99999-999"
          register={register}
          type="text"
          label="CEP"
          name="cep"
          error={errors?.cep}
          setFormValue={setValue}
        />
        <Input
          register={register}
          type="text"
          label="Cidade"
          name="cidade"
          error={errors?.cidade}
          value={watch('cidade')}
        />
        <Input
          register={register}
          type="text"
          label="UF"
          name="uf"
          error={errors?.uf}
          value={watch('uf')}
        />
      </If>
      <FormButtons
        hideBack={activeStep === 0}
        back={back}
        onSubmit={checkValid}
      />
    </form>
  )
}
