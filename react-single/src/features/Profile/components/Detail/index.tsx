import React, { useState } from 'react'

import IconCircle from '../../../../components/IconCircle'
import db from '../../../../assets/db.json'

import GithubIcon from '../ButtonGit'

import {
  Container,
  DetailContainer,
  Image,
  Name,
  Phone,
  City,
  Email
  } from './styles'

type Props = {}

const Detail = (props: Props) => {
  const [ data ] = useState(db)
  const { sendfoto, cadastro } = data

  return (
    <Container>
      <DetailContainer>
        <Image src={ sendfoto[0].value } alt='imagem de perfil'/>
          <Name>
           { cadastro[0].nome }
            <GithubIcon repository="https://github.com/hcsm/FrwkBootCamp-FrontEnd" />
          </Name>
         
          <Phone>
            <IconCircle color="white" icon="PhoneInTalk" />  
            { cadastro[0].telefone }
          </Phone>
        
          <City>
            <IconCircle color="white" icon="LocationOn" />  
            { cadastro[0].cidade }
          </City>
          
          <Email>
            <IconCircle color="white" icon="LocalPostOffice" />  
            { cadastro[0].email }
          </Email> 
      </DetailContainer>
    </Container>
  )
}

export default Detail















