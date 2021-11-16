import React, { useState } from 'react'
import { Header } from '../../components/Header'
import Detail from './components/Detail'
import Technology from './components/Technology'
import { useLocation } from 'react-router-dom'
import { useGetProfessionalsQuery } from '../../services/users'

import { WrapperProfile, WrapperBanner, WrapperContent } from './styles'

type Props = {}

const Profile = (props: Props) => {
  let location = useLocation();
  const onlyRead =  (location.state==="read" || location.state===undefined) 
  const { data, isError } = useGetProfessionalsQuery()

  const professional =  data?.filter(
      user => String(user.professionalId) === location.search.substring(1)
    )[0]
   
  return (
    <WrapperProfile>
      <Header />
      <WrapperBanner />

      <WrapperContent>
        <Detail props = {professional ? professional : {}}
                reading = {onlyRead}/>
        <Technology />
      </WrapperContent>
    </WrapperProfile>
  )
}

export default Profile
