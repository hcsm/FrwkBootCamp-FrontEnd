import React from 'react'

import {
  WrapperCard,
  Header,
  Body,
  WrapperImage,
  WrapperTitle,
  Title,
  Button,
  WrapperStacksBox,
  WrapperBadge,
  TitleBadge,
  Badge,
} from './styles'

import IconCircle from '../../../../components/IconCircle'

type Props = {}

export const Card = (props: Props) => {
  return (
    <WrapperCard>
      <Header>
        <WrapperImage />
        <WrapperTitle>
          <Title>
            João Marcos
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
      <Body>
        <WrapperStacksBox>
          <TitleBadge>Principais stacks</TitleBadge>
          <WrapperBadge>
            <Badge label="Angular" color="primary" />
            <Badge label="Reactjs" color="primary" />
            <Badge label="Javascript" color="primary" />
            <Badge label="CSS" color="primary" />
            <Badge label="C++" color="primary" />
          </WrapperBadge>
        </WrapperStacksBox>
        <WrapperStacksBox className="mt">
          <TitleBadge>Aprendizado</TitleBadge>
          <WrapperBadge>
            <Badge label="Typescript" color="primary" />
            <Badge label="Sass" color="primary" />
            <Badge label="HTML" color="primary" />
            <Badge label="PHP" color="primary" />
            <Badge label="Wordpress" color="primary" />
          </WrapperBadge>
        </WrapperStacksBox>
      </Body>
    </WrapperCard>
  )
}
