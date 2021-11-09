import React, { useState } from 'react'

import IconCircle from '../../../../components/IconCircle'
import db from '../../../../assets/db.json'

import GithubIcon from '../../../../components/ButtonGit'

import {
  Container,
  DetailContainer,
  Image,
  Name,
  Phone,
  City,
  Email,
} from './styles'
import { useAppSelector } from '../../../../app/store'

type Props = {}

const Detail = (props: Props) => {
  const authUser = useAppSelector(state => state.authUser.data)

  return (
    <Container className=" col-xl-4 col-lg-4 col-12 d-flex justify-content-center">
      <DetailContainer>
        <Image src={authUser.foto.value} alt="imagem de perfil" />
        <Name className="ps-2">
          {authUser.nome}
          <GithubIcon
            repository="https://github.com/hcsm/FrwkBootCamp-FrontEnd"
            height="39px"
            width="39px"
          />
        </Name>

        <Phone>
          <IconCircle color="white" icon="PhoneInTalk" />
          {authUser.telefone}
        </Phone>

        <City>
          <IconCircle color="white" icon="LocationOn" />
          {authUser.cidade}
        </City>

        <Email>
          <IconCircle color="white" icon="LocalPostOffice" />
          {authUser.email}
        </Email>
      </DetailContainer>
    </Container>
  )
}

export default Detail
