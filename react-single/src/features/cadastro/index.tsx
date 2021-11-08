// @flow
import Box from '@material-ui/core/Box'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Stepper from '@material-ui/core/Stepper'
import axios from 'axios'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useAppSelector } from '../../app/store'
import If from '../../components/If'
import { InputProfileImage } from '../../components/InputProfileImage'
import { BASE_URL } from '../../services/Enums'
import { selectEspecialidades } from '../../services/especialidades'
import { selectStacks } from '../../services/stacks'
import { Button, Logo, SubTitle } from '../../styles/global'
import { CadastroType } from '../../types/global'
import './Cadastro.css'
import { FormCadastro } from './components/FormCadastro'
import { FormStacks } from './components/FormStacks'
import { FormFoto } from './components/FormFoto'
import { FormButtons } from './components/FormButtons'

type Props = {}
export const Cadastro = (props: Props) => {
  const state = useAppSelector(state => state)
  const steps = [
    'Registro',
    'Dados Pessoais',
    'Foto',
    'Experiência',
    'Aprender',
  ]

  const [activeStep, setActiveStep] = React.useState(0)
  const [skipped, setSkipped] = React.useState(new Set<number>())

  const { handleSubmit, setValue, watch } = useForm<CadastroType>({
    mode: 'onBlur',
  })
  const onSubmit = (data: CadastroType) => {
    data.id = state.authUser.data.id
    axios.post(`${BASE_URL}/perfil`, data).then(resp => {
      toast.success('Cadastro completo')
    })
  }
  const onError = (errors: object) => {
    Object.values(errors).map(e => (e ? toast.error(e.message) : false))
  }
  const stacks = getStacks()
  const especialidades = getEspecialidades()

  const isStepSkipped = (step: number) => {
    return skipped.has(step)
  }

  const handleNext = async () => {
    if (activeStep === 4) {
      handleSubmit(onSubmit, onError)()
    } else {
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
          <If test={activeStep === 0 || activeStep === 1}>
            <FormCadastro
              activeStep={activeStep}
              next={handleNext}
              back={handleBack}
            />
          </If>
          <form className="needs-validation form" autoComplete="off">
            <If test={activeStep === 2}>
              <FormFoto back={handleBack} next={handleNext} />
            </If>
            <If test={activeStep === 3}>
              <FormStacks
                watchedValue={watch('especialidade', {})}
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
            </If>
            <If test={activeStep === 4}>
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
            <If test={activeStep === 3 || activeStep === 4}>
              <FormButtons
                back={handleBack}
                onSubmit={handleNext}
                isSubmit={activeStep === 4}
                labelSubmit="Finalizar"
              />
            </If>
          </form>
        </React.Fragment>
      </div>
      <div className="background" />
    </div>
  )
}
function getStacks() {
  const { data, isError, isSuccess } = selectStacks()
  if (isError) {
    toast.error('Algo deu errado')
  }
  if (isSuccess) {
    return data
  }
  return []
}
function getEspecialidades() {
  const { data, isSuccess, isError } = selectEspecialidades()
  if (isError) {
    toast.error('Algo deu errado')
  }
  if (isSuccess) {
    return data
  }
  return []
}
