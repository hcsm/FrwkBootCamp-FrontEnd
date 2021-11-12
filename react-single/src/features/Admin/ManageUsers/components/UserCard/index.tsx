// @flow
import * as React from 'react'
import { useForm } from 'react-hook-form'
import If from '../../../../../components/If'
import { Input } from '../../../../../components/Input'
import { TextArea } from '../../../../../components/TextArea'
import { DEFAULT_PHOTO } from '../../../../../services/Enums'
import { UserFoto } from '../../../../../types/cadastro'
import { ActionsIcons } from '../ActionsIcons'
import { Card, Image, NotifyForm } from './styles'
type Props = {
  id: string
  name: string
  foto?: UserFoto
}
interface FormValues {
  title: string
  message: string
}

export const UserCard = ({ id, name, foto }: Props) => {
  const [isOpen, toggleIsOpen] = React.useState(false)

  const notifyDeleteIcons = [
    {
      name: 'Email',
      action: () => {
        toggleIsOpen(true)
        setFocus('title')
      },
    },
    { name: 'Delete', action: () => {} },
  ]
  const sendCancelIcons = [
    { name: 'Send', action: () => {} },
    {
      name: 'Clear',
      action: () => {
        reset()
        toggleIsOpen(false)
      },
    },
  ]
  let icons = isOpen ? sendCancelIcons : notifyDeleteIcons
  const { register, setFocus, reset } = useForm<FormValues>()

  return (
    <Card>
      <div className="col-12 d-flex align-items-center">
        <div className="col-12 col-sm-2 d-flex justify-content-center">
          <Image src={foto?.value ?? DEFAULT_PHOTO} alt="imagem de perfil" />
        </div>
        <div className="col-12 col-sm-6 name">{name}</div>
        <div className="col-12 col-sm-4 d-flex justify-content-end">
          <ActionsIcons icons={icons} />
        </div>
      </div>
      <If test={isOpen}>
        <div className="mt-5 col-12 d-flex justify-content-center">
          <NotifyForm className="w-75">
            <Input
              type="text"
              label="Titulo"
              name="title"
              register={register}
            />
            <TextArea name="message" label="Mensagem" register={register} />
          </NotifyForm>
        </div>
      </If>
    </Card>
  )
}
