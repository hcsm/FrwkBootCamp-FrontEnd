// @flow
import { yupResolver } from '@hookform/resolvers/yup'
import Box from '@material-ui/core/Box'
import axios from 'axios'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import { setUser, useAppDispatch } from '../../../app/store'
import If from '../../../components/If'
import { Input } from '../../../components/Input'
import { InputCep } from '../../../components/InputCep'
import { InputEmail } from '../../../components/InputEmail'
import { InputProfileImage } from '../../../components/InputProfileImage'
import { BASE_URL } from '../../../services/Enums'
import { Button } from '../../../styles/global'
import { CadastroType } from '../../../types/cadastro'

type Props = {
  activeStep: number
  next: Function
  back: Function
}
export const FormCadastro = ({ activeStep, next, back }: Props) => {
  const dispatch = useAppDispatch()
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
    mode: 'onBlur',
  })
  const onSubmit = (dados: CadastroType) => {
    dados.email = dados.inicioEmail + dados.dominio
    const { inicioEmail, dominio, cep, ...cadastro } = dados
    axios
      .post(`${BASE_URL}/cadastro`, cadastro)
      .then(resp => {
        dispatch(setUser(resp.data))
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
      Object.values(errors).map(e => (e ? toast.error(e.message) : false))
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
        />
        <Input
          error={errors?.senha}
          register={register}
          type="password"
          label="Senha"
          name="senha"
        />
        <Input
          error={errors?.confirmarSenha}
          register={register}
          type="password"
          label="Confirme sua senha"
          name="confirmarSenha"
        />
      </If>
      <If test={activeStep === 1}>
        <Input
          error={errors?.nome}
          register={register}
          type="text"
          label="Nome"
          name="nome"
        />
        <Input
          value={watch('telefone', '')}
          mask={'(99) 9 9999-9999'}
          register={register}
          type="text"
          label="Telefone"
          name="telefone"
          error={errors?.telefone}
        />
        <InputCep
          value={watch('cep', '')}
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
        />
        <Input
          register={register}
          type="text"
          label="UF"
          name="uf"
          error={errors?.uf}
        />
      </If>
      <Box
        className="btn-acoes"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          pt: 2,
          position: 'relative',
        }}
      >
        <Button
          color="inherit"
          type="button"
          hidden={activeStep === 0}
          onClick={async () => await back()}
        >
          Voltar
        </Button>
        <Box sx={{ flex: '1 1 auto' }} />
        <Button type="button" onClick={async () => await checkValid()}>
          Avançar
        </Button>
      </Box>
    </form>
  )
}
