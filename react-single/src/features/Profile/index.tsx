import React, { useState } from 'react'
import { Header } from '../../components/Header'
import Detail from './components/Detail'
import Technology from './components/Technology'

import {
  WrapperProfile,
  WrapperHeader,
  WrapperBanner,
  WrapperContent,
} from './styles'

type Props = {}

const Profile = (props: Props) => {
  return (
    <WrapperProfile>
      <Header />
      <WrapperBanner />

      <WrapperContent>
        <Detail />
        <Technology />
      </WrapperContent>
    </WrapperProfile>
  )
}

export default Profile
