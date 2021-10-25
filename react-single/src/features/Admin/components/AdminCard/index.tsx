// @flow
import { CardContent } from '@material-ui/core'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import IconCircle from '../../../../components/IconCircle'
import { StacksType } from '../../../../types/cadastro'
import ConfirmClearButtons from './components/ConfirmClearButtons'
import EditDeleteButtons from './components/EditDeleteButtons'
import { CardInput } from './styles'

type Props = {
  currentValue?: StacksType
  isNew?: boolean
  onClear?: Function
  onConfirm?: Function
  onRemove?: Function
}

type FormValues = {
  label: string
}

export const AdminCard = ({
  currentValue,
  isNew,
  onClear,
  onConfirm,
  onRemove,
}: Props) => {
  const { register, setFocus, getValues, reset } = useForm<FormValues>()
  const [iseditOrNew, setIsEditOrNew] = React.useState(!!isNew)
  const [InputReadOnly, setInputReadOnly] = React.useState(!iseditOrNew)

  const toggleActions = () => {
    setInputReadOnly(!InputReadOnly)
    setIsEditOrNew(!iseditOrNew)
  }
  const focusInput = () => {
    setFocus('label')
    toggleActions()
  }
  const clearInput = () => {
    toggleActions()
    if (currentValue) {
      reset({ label: currentValue.label })
    } else if (onClear) {
      onClear()
    }
  }
  const submit = () => {
    const value = getValues('label')?.trim()
    if (value && onConfirm) {
      const obj = { value, label: value, id: currentValue?.id }
      onConfirm(obj)
      toggleActions()
      onClear ? onClear() : undefined
    } else {
      toast.error('Valor invalido')
    }
  }
  const remove = () => {
    if (onRemove) {
      onRemove()
    }
  }
  return (
    <div className={`d-flex justify-content-center`}>
      <Col md={9}>
        <CardContent
          sx={{
            border: '1pt solid #213054',
            alignItems: 'end',
            margin: '10px 0',
            width: '100%',
            backgroundColor: ' #0B0C22',
            borderRadius: '10px',
          }}
        >
          <Row className="mt-2">
            <Col md={7}>
              <CardInput
                className="ms-2"
                {...register('label')}
                defaultValue={currentValue?.label}
                readOnly={InputReadOnly}
                placeholder="Digite aqui"
              />
            </Col>
            <Col md={5}>
              <div className="d-flex justify-content-end">
                {iseditOrNew ? (
                  <ConfirmClearButtons submit={submit} clear={clearInput} />
                ) : (
                  <EditDeleteButtons focus={focusInput} remove={remove} />
                )}
              </div>
            </Col>
          </Row>
        </CardContent>
      </Col>
    </div>
  )
}

export default AdminCard
