import React, { useState } from 'react'

import db from '../../../../assets/db.json'
import Stack from './Components/stack'

import {
  DetailContainer,
  Technologyes,
} from './styles'

type Props = {}

const Technology = (props: Props) => {
  const [ data ] = useState(db)
  const { sendfoto, cadastro } = data

  return (
    <>
      <DetailContainer>
        <Technologyes>
          <Stack/>
        </Technologyes>  
      </DetailContainer>
    </>
  )
}

export default Technology















