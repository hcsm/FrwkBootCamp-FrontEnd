// @flow
import * as React from 'react'
import { FieldValues, UseFormSetValue } from 'react-hook-form'
import Select, { MultiValue, StylesConfig } from 'react-select'
import { SubTitle } from '../../../styles/global'

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

const colourStyles: StylesConfig<Istack, true> = {
  control: styles => ({
    ...styles,
    border: '2pt solid #0af585',
    backgroundColor: 'white',
    padding: '0.5em',
    caretColor: 'transparent',
  }),
  multiValue: styles => {
    return {
      ...styles,
      border: '1pt solid #24006f',
      borderRadius: '3px',
      backgroundColor: '#24006f',
      padding: '0.25em 0.6em',
    }
  },
  singleValue: styles => ({
    ...styles,
    border: '1pt solid #24006f',
    borderRadius: '3px',
    color: '#0af585',
    backgroundColor: '#24006f',
    padding: '0.25em 2em',
    marginLeft: 'auto',
    marginRight: 'auto',
  }),
  multiValueLabel: styles => ({
    ...styles,
    color: '#0af585',
    textAlign: 'center',
  }),
  multiValueRemove: styles => ({
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
      <SubTitle>{titulo}</SubTitle>
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
