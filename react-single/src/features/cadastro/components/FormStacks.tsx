// @flow
import React, { useState } from 'react'
import { FieldValues, UseFormSetValue } from 'react-hook-form'
import styled from 'styled-components'
type Props = {
  stacks: string[]
  titulo: string
  setFormValue: UseFormSetValue<FieldValues>
  field: string
  values?: string[]
  max?: number
}
interface Istack {
  selecionada: boolean
}

const StackButton = styled.button<Istack>`
  display: inline-block;
  font-weight: thin;
  text-align: center;
  border-radius: 3px;
  border: 1pt solid #24006f;
  color: ${props => (props.selecionada ? '#0af585' : '#24006f')};
  font-size: .95em;
  padding: 0.25em 1em;
  background: ${props => (props.selecionada ? '#24006f' : 'transparent')};
  margin: 5px;
`
const StacksBox = styled.div`
  border: 2pt solid #0af585;
  padding: 0.5em;
  z-index: 1;
`
export const FormStacks = ({
  stacks,
  titulo,
  setFormValue,
  field,
  values,
  max,
}: Props) => {
  const [selecionadas, setSelecionadas] = useState<string[]>(values || [])
  const toggle = (stack: string) => {
    if (selecionadas.includes(stack)) {
      const newArray = selecionadas.filter(s => s !== stack)
      setSelecionadas(newArray)
      setFormValue(field, newArray)
    } else if(!max || (max && selecionadas.length < max)){
      const newArray = [...selecionadas, stack]
      setSelecionadas([...selecionadas, stack])
      setFormValue(field, newArray)
    }
  }
  const selecionada = (stack: string) => {
    return selecionadas.includes(stack)
  }
  const mostrarStacks = () => {
    return stacks.map(stack => (
      <StackButton
        type="button"
        key={stack}
        selecionada={selecionada(stack)}
        onClick={() => toggle(stack)}
      >
        {stack}
      </StackButton>
    ))
  }
  return (
    <div className="mb-3">
      <h4 className="mb-2">{titulo}</h4>
      <StacksBox className="d-flex flex-wrap justify-content-center">
        {mostrarStacks()}
      </StacksBox>
    </div>
  )
}
