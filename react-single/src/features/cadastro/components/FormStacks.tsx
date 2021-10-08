// @flow
import React, { useState } from 'react'
import { FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form'
import Select, { MultiValue, StylesConfig } from 'react-select'
import styled from 'styled-components'

type Props = {
  stacks: object[]
  titulo: string
  watchedValue: any
  setFormValue: UseFormSetValue<FieldValues>
  field: string
  placeholder: string
  isMulti?: true
}

interface Istack {
  label: string
  value: string
}

const StacksBox = styled.div`
  border: 2pt solid #0af585;
  padding: 0.5em;
  z-index: 1;
`
const colourStyles: StylesConfig<Istack, true> = {
  control: styles => ({
    ...styles,
    border: '2pt solid #0af585',
    backgroundColor: 'white',
    padding: '0.5em',
    caretColor: 'transparent',
  }),
  multiValue: (styles, { data }) => {
    return {
      ...styles,
      border: '1pt solid #24006f',
      borderRadius: '3px',
      backgroundColor: '#24006f',
      padding: '0.25em 0.6em',
    }
  },
  singleValue: (styles, { data }) => ({
    ...styles,
    border: '1pt solid #24006f',
    borderRadius: '3px',
    color: '#0af585',
    backgroundColor: '#24006f',
    padding: '0.25em 2em',
    marginLeft: 'auto',
    marginRight: 'auto',
  }),
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: '#0af585',
    textAlign: 'center',
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: '#0af585',
    ':hover': {
      backgroundColor: '#0af58388',
      color: 'white',
    },
  }),
}

export const FormStacks = ({
  stacks,
  titulo,
  setFormValue,
  field,
  placeholder,
  isMulti,
  watchedValue,
}: Props) => {
  const selected = (values: MultiValue<Istack>) => {
    setFormValue(field, values)
  }
  return (
    <div className="mb-3">
      <h4 className="mb-2">{titulo}</h4>
      <Select
        styles={colourStyles}
        closeMenuOnSelect={!isMulti}
        isMulti={isMulti}
        placeholder={placeholder}
        options={stacks}
        onChange={values => selected(values)}
        defaultValue={watchedValue}
      />
    </div>
  )
}
