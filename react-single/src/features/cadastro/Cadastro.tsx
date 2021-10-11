// @flow
import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import * as yup from 'yup'
import If from '../../components/If'
import { Stepper } from '../../components/Stepper'
import { selectEspecialidades } from '../../services/especialidades'
import { selectStacks } from '../../services/stacks'
import { CadastroType } from '../../types/cadastro'
import { CadastroBasicoForm } from './CadastroBasicoForm'
import { FormStacks } from './components/FormStacks'

type Props = {}

const Wrapper = styled.section`
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 460px;
  min-height: 100vh;
  margin: 5px auto;
  padding: 25px;
  text-align: center;
  border-radius: 15px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
`
const Container = styled.div`
  width: 560px;
  margin: auto;
`
const Button = styled.button`
  display: inline-block;
  font-weight: thin;
  text-align: center;
  border-radius: 3px;
  border: 1pt solid #24006f;
  color: #24006f;
  font-size: 1em;
  padding: 0.25em 1em;
  background: transparent;
  margin-top: 10px;
  &:hover {
    background-color: #24006f;
    color: #0af585;
  }
`
const Form = styled.form`
  position: relative;
  height: calc(100% - 95px);
`

export const Cadastro = (props: Props) => {
  const [step, setStep] = useState(1)
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
    telefone: yup.string().min(13, 'Telefone invalido'),
  }
  const schema = yup.object(validatedFields).required()
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<CadastroType>({
    resolver: yupResolver<yup.AnyObjectSchema>(schema),
  })
  const onSubmit = (data: CadastroType) => {
    if (step === 1 || step === 2) {
      proximo()
    } else {
      data.email = data.inicioEmail + data.dominio
      console.log(data)
    }
  }
  const proximo = () => {
    setStep(step + 1)
  }
  const anterior = () => {
    setStep(step - 1)
  }
  const onError = (errors: object) => {
    Object.values(errors).map(e => (e ? toast.error(e.message) : false))
  }
  const stacks = setStacks()
  const especialidade = setEspecialidade()
  return (
    <Container>
      <Row>
        <Wrapper className="col-sm-12">
          <Row className="justify-content-around">
            <Stepper active={step === 1 ? true : false} step="1" />
            <Stepper active={step === 2 ? true : false} step="2" />
            <Stepper active={step === 3 ? true : false} step="3" />
          </Row>
          <Form
            className="needs-validation"
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit, onError)}
          >
            <If test={step === 1}>
              <CadastroBasicoForm
                register={register}
                setFormValue={setValue}
                watch={watch}
                errors={errors}
              />
            </If>
            <If test={step === 2}>
              <>
                <FormStacks
                  watchedValue={watch('especialidade', [])}
                  titulo="Especialidade:"
                  stacks={especialidade}
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
            <If test={step === 3}>
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
            <Row className="justify-content-center">
              <Col md={6} hidden={step === 1}>
                <Button type="button" onClick={() => anterior()}>
                  Anterior
                </Button>
              </Col>

              <Col md={6} hidden={step === 3}>
                <Button type="submit">Continuar</Button>
              </Col>

              <Col md={6} hidden={step !== 3}>
                <Button type="submit">Finalizar</Button>
              </Col>
            </Row>
          </Form>
        </Wrapper>
      </Row>
    </Container>
  )
}

function setStacks() {
  const { data, isSuccess, isError } = selectStacks(null)
  if (isError) {
    toast.error('Algo deu errado')
  }
  if (isSuccess) {
    return JSON.parse(data)
  }
  return []
}
function setEspecialidade() {
  const { data, isSuccess, isError } = selectEspecialidades(null)
  if (isError) {
    toast.error('Algo deu errado')
  }
  if (isSuccess) {
    return JSON.parse(data)
  }
  return []
}
