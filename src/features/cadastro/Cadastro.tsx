// @flow
import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
// import { setLocale } from 'yup';
import { Col, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import * as yup from 'yup'
import { Stepper } from '../../components/Stepper'
import { CadastroType } from '../../types/cadastro'
import If from './../../components/If'
import { CadastroBasicoForm } from './CadastroBasicoForm'
import { FormStacks } from './components/FormStacks'


const Wrapper = styled.section`
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 460px;
  height: 100vh;
  margin: 0 auto;
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
  .container-button{
    width: 100%;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    bottom: 5%;
  }
`
type Props = {}
export const Cadastro = (props: Props) => {
  const [step, setStep] = useState(1)
  const validatedFields = {
    nome: yup.string().required('O campo nome é obrigatorio'),
    inicioEmail: yup.string().required('Email invalido'),
    cep: yup.string().matches(/[0-9]{5}-[0-9]{3}/,'CEP invalido').required('CEP invalido'),
    telefone: yup
      .string()
      .min(13, 'Telefone invalido'),
  }
  const schema = yup.object(validatedFields).required()
  const { register, handleSubmit, setValue, watch } = useForm<CadastroType>({
    resolver: yupResolver<yup.AnyObjectSchema>(schema),
  })
  const onSubmit = (data: CadastroType) => {
    if(step === 1 || step === 2){
      proximo();
    }else{
      data.email = data.inicioEmail + data.dominio;
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
  const stacks = [
    'Java',
    '.NET',
    'Angular',
    'Docker',
    'JavaScript',
    'TypeScript',
    'C#',
    'Go lang',
    'Azure',
  ]
  return (
    <Container>
      <Wrapper className="">
        <Row className="justify-content-around">
          <Stepper active={step === 1 ? true : false} step="1" />
          <Stepper active={step === 2 ? true : false} step="2" />
          <Stepper active={step === 3 ? true : false} step="3" />
        </Row>
        <Form autoComplete="off" onSubmit={handleSubmit(onSubmit, onError)}>
          <If test={step === 1}>
            <CadastroBasicoForm
              register={register}
              setFormValue={setValue}
              watch={watch}
            />
          </If>
          <If test={step === 2}>
            <>
              <FormStacks
                values={watch('especialidade', [])}
                titulo="Especialidade:"
                stacks={['Frontend', 'Backend', 'Fullstack', ...stacks]}
                setFormValue={setValue}
                field="especialidade"
                max={1}
              />
              <FormStacks
                values={watch('stacksComExperiencia', [])}
                titulo="Stacks com experiência:"
                stacks={stacks}
                setFormValue={setValue}
                field="stacksComExperiencia"
              />
            </>
          </If>
          <If test={step === 3}>
            <FormStacks
              values={watch('stacksAprender', [])}
              titulo="Stacks que deseja aprender:"
              stacks={stacks}
              setFormValue={setValue}
              field="stacksAprender"
            />
          </If>
          <Row className="justify-content-center container-button">
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
    </Container>
  )
}
