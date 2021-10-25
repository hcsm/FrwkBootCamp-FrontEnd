// @flow
import axios, { Method } from 'axios'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { setUser, useAppDispatch, useAppSelector } from '../../../app/store'
import { InputProfileImage } from '../../../components/InputProfileImage'
import { BASE_URL } from '../../../services/Enums'
import { SubTitle } from '../../../styles/global'
import { userFoto } from '../../../types/cadastro'
import { FormButtons } from './FormButtons'

type Props = {
  back: Function
  next: Function
}
type FormValues = {
  foto: userFoto
}
export const FormFoto = ({ back, next }: Props) => {
  const dispatch = useAppDispatch()
  const authUser = useAppSelector(state => state.authUser)
  const { register, handleSubmit, setValue, watch } = useForm<FormValues>({
    defaultValues: { foto: authUser?.data?.foto },
    mode: 'onBlur',
  })
  const onSubmit = (dados: FormValues) => {
    let method: Method = 'post'
    if (dados?.foto?.id) {
      method = 'put'
    }
    if (dados?.foto?.value) {
      axios({
        url: `${BASE_URL}/sendfoto/${dados.foto.id ?? ''}`,
        method: method,
        data: dados.foto,
      })
        .then(resp => {
          dispatch(setUser({ foto: resp.data }))
          next()
        })
        .catch(error => {
          toast.error('Falha em comunicar com o servidor')
        })
    } else {
      next()
    }
  }
  return (
    <>
      <SubTitle>Faça upload da sua melhor foto (opcional)</SubTitle>
      <div className="p-4">
        <InputProfileImage
          register={register}
          setFormValue={setValue}
          type="image"
          name="foto.value"
          value={watch('foto.value')}
          color="#0af585"
        />
      </div>
      <FormButtons back={back} onSubmit={handleSubmit(onSubmit)} />
    </>
  )
}
