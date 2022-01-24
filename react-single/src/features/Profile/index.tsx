import React, { useState } from 'react'
import { Header } from '../../components/Header'
import Detail from './components/Detail'
import Technology from './components/Technology'
import { useLocation, useHistory } from 'react-router-dom'
import { useGetProfessionalsQuery } from '../../services/users'
import IconCircle from '../../components/IconCircle'

import { WrapperProfile, WrapperBanner, WrapperContent, BackButton, Button } from './styles'

type Props = {}

const Profile = (props: Props) => {
  let location = useLocation();
  const onlyRead =  (location.state==="read" || location.state===undefined) 
  const { data, isError } = useGetProfessionalsQuery()
  const history = useHistory()

  const professional =  data?.filter(
      user => String(user.professionalId) === location.search.substring(1)
    )[0]
   
  function handleBack() {
    history.push('/goBack')
  }

  return (
    <WrapperProfile>
      <Header />
     
      <WrapperBanner />
      <div className='d-flex justify-content-end'>
        <Button>
          <IconCircle
            color="white"
            borderColor="#213054"
            icon='Edit'
            backgroundColor="#213054"
            hasShadow
          />
        </Button>
      </div>

      <BackButton onClick={handleBack}>
        <IconCircle color="white" icon="KeyboardBackspace" />
      </BackButton>  

      <WrapperContent>
        <Detail props = {professional ? professional : {}}
                reading = {onlyRead}/>
        <Technology />
      </WrapperContent>
    </WrapperProfile>
  )
}

export default Profile
