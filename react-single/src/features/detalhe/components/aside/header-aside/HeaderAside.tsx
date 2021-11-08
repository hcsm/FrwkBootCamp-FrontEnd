import React from 'react'
import { RootState, useAppSelector } from '../../../../../app/store'
import IconCircle from '../../../../../components/IconCircle'
import {
  Button,
  Header,
  IconWrapper,
  Image,
  Title,
  WrapperTitle
} from './styles'

type Props = {
  toggle?: Function | undefined
}

export const HeaderAside = ({ toggle }: Props) => {
  const user =  useAppSelector((state: RootState) => state.authUser.data);
  return (
    <Header>
      {toggle && (
        <IconWrapper className="ms-auto pointer" onClick={() => toggle()}>
          <IconCircle icon="Clear" color="white" />
        </IconWrapper>
      )}
      <Image src={user.foto.value} alt="imagem de perfil" />
      <WrapperTitle>
        <Title>
          {user.nome}
          <Button>
            <IconCircle
              color="white"
              borderColor="#7900DF"
              icon="Edit"
              backgroundColor="#7900DF"
              hasShadow
            />
          </Button>
        </Title>
      </WrapperTitle>
    </Header>
  )
}
