import React, { useState, useEffect } from 'react'
import IconCircle from '../../../../components/IconCircle'
import db from '../../../../assets/db.json'
import { DEFAULT_PHOTO } from '../../../../services/Enums'
import GithubIcon from '../../../../components/ButtonGit'
import { useForm } from 'react-hook-form'
import {
  Container,
  DetailContainer,
  Image,
  Name,
  Phone,
  City,
  Email,
  Button,
  Input
} from './styles'
import { useAppSelector } from '../../../../app/store'
import { UserType } from '../../../../types/cadastro'
import { DropZone } from '../DropZone'

type FormValues = {
  name: string
  phone: string
  city: string
  email: string
}

type Props = {
  props: Partial<UserType>
  reading: boolean
}

const Detail = (props: Props) => {
  const authUser = useAppSelector(state => state.authUser.data)
  const { register, setFocus, getValues, reset } = useForm<FormValues>()
  const [ReadOnly, setReadOnly] = useState(props.reading)
  const [IconName, setIconName] = useState(props.reading ? 'Edit' : 'Check')

  const name = (getValues('name') === undefined ? props.props.nome : getValues('name'))

  function handleEdit() {
    setReadOnly(!ReadOnly)
    setIconName(() => IconName === 'Check' ? 'Edit' : 'Check')
    setFocus('name')
  }

  return (
    <Container className=" col-xl-4 col-lg-4 col-12 d-flex justify-content-center">
      <DetailContainer>
        {authUser.email === props.props.email ?
         <div className='d-flex justify-content-end'>
          <Button onClick={() => {handleEdit()}} >
              <IconCircle
                color="white"
                borderColor="#7900DF"
                icon={IconName}
                backgroundColor="#7900DF"
                hasShadow
              />
            </Button>
          </div>
          : null
        }

        <Image src={props.props?.foto?.value ?? DEFAULT_PHOTO} alt="imagem de perfil" />
        <Name className="ps-2">
         {!ReadOnly ?
           <Input
            {...register('name')}
            defaultValue={props.props.nome}
            readOnly={ReadOnly}
            autoFocus={true}
            /> :
            name
          }
        </Name>

        <Phone>
          <IconCircle color="white" icon="PhoneInTalk" />
          <Input
            {...register('phone')}
            defaultValue={props.props.telefone}
            readOnly={ReadOnly}
          />
        </Phone>

        <City>
          <IconCircle color="white" icon="LocationOn" />
          <Input
            {...register('city')}
            defaultValue={props.props.cidade}
            readOnly={ReadOnly}
          />
        </City>

        <Email>
          <IconCircle color="white" icon="LocalPostOffice" />
          <Input
            {...register('email')}
            defaultValue={props.props.email}
            readOnly={ReadOnly}
          />
        </Email>
        <div className="m-4">

        <DropZone />
        </div>
      </DetailContainer>
    </Container>
  )
}

export default Detail
