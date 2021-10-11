// @flow
import { yupResolver } from '@hookform/resolvers/yup'
import Box from '@material-ui/core/Box'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Stepper from '@material-ui/core/Stepper'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import If from '../../components/If'
import { Input } from '../../components/Input'
import { InputCep } from '../../components/InputCep'
import { InputEmail } from '../../components/InputEmail'
import { selectEspecialidades } from '../../services/especialidades'
import { selectStacks } from '../../services/stacks'
import { Button, Logo } from '../../styles/global'
import { CadastroType } from '../../types/cadastro'
import { selectEspecialidades } from './../../services/especialidades'
import { selectStacks } from './../../services/stacks'
import './Cadastro.css'
import { FormStacks } from './components/FormStacks'

type Props = {}
export const Cadastro = (props: Props) => {
  const steps = ['Registro', 'Dados Pessoais', 'Experiência', 'Aprender']

  const [activeStep, setActiveStep] = React.useState(0)
  const [skipped, setSkipped] = React.useState(new Set<number>())
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
    telefone: yup.string().matches(/(\(?\d{2}\)?\s)?(\d{4,5}\-\d{3})/, 'Telefone invalido'),
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
    mode: "onBlur"
  })
  const onSubmit = (data: CadastroType) => {
    data.email = data.inicioEmail + data.dominio;
    console.log(data)
  }
  const onError = (errors: object) => {
    console.log(errors)
    Object.values(errors).map(e => (e ? toast.error(e.message) : false))
  }
  const stacks = getStacks()
  const especialidade = getEspecialidades()

  const isStepSkipped = (step: number) => {
    return skipped.has(step)
  }
  const isCurrentFormValid = async (activeStep: number) => {
    toast.dismiss();
    if (activeStep === 0) {
      return await trigger(['inicioEmail', 'senha', 'confirmarSenha'])
    } else if (activeStep === 1) {
      return await trigger(['nome', 'cidade', 'uf', 'cep', 'telefone'])
    }else {
      return true;
    }
  }
  const handleNext = async () => {
    if (await isCurrentFormValid(activeStep)) {
      let newSkipped = skipped
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values())
        newSkipped.delete(activeStep)
      }
      setActiveStep(prevActiveStep => prevActiveStep + 1)
      setSkipped(newSkipped)
    }
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  return (
    <div className="content">
      <div className="wrapper">
        <Logo className="logo">Framebook</Logo>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps: { completed?: boolean } = {}
            const labelProps: {
              optional?: React.ReactNode
            } = {}

            if (isStepSkipped(index)) {
              stepProps.completed = false
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            )
          })}
        </Stepper>
        <React.Fragment>
          <form
            className="needs-validation form"
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit, onError)}
          >
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
            <If test={activeStep === 2}>
              <>
                <FormStacks
                  watchedValue={watch('especialidade', [])}
                  titulo="Especialidade:"
                  stacks={especialidades}
                  placeholder="Selecione sua especialidade"
                  setFormValue={setValue}
                  field="especialidade"
                />
                <FormStacks
                  watchedValue={watch('stackExperiencia', [])}
                  titulo="Stacks com experiência:"
                  stacks={stacks}
                  isMulti
                  placeholder="Selecione"
                  setFormValue={setValue}
                  field="stackExperiencia"
                />
              </>
            </If>
            <If test={activeStep === 3}>
              <FormStacks
                isMulti
                watchedValue={watch('stackAprender', [])}
                titulo="Stacks que deseja aprender:"
                placeholder="Selecione"
                stacks={stacks}
                setFormValue={setValue}
                field="stackAprender"
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
                onClick={handleBack}
              >
                Voltar
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button
                type="button"
                onClick={handleNext}
                hidden={activeStep === 3}
              >
                Avançar
              </Button>
              <Button type="submit" hidden={activeStep !== 3}>
                Finalizar
              </Button>
            </Box>
          </form>
        </React.Fragment>
      </div>
      <div className="background" />
    </div>
  )
}
function getStacks() {
  const { data, isError, isSuccess } = selectStacks(null)
  if (isError) {
    toast.error('Algo deu errado')
  }
  if (isSuccess) {
    return JSON.parse(data)
  }
  return []
}
function getEspecialidades() {
  const { data, isSuccess, isError } = selectEspecialidades(null)
  if (isError) {
    toast.error('Algo deu errado')
  }
  if (isSuccess) {
    return JSON.parse(data)
  }
  return []
}
