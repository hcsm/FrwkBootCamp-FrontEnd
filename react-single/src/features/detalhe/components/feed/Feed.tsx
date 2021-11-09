import React from 'react'
import { RootState, useAppSelector } from '../../../../app/store'
import HomeRoutes from '../../../../routes/HomeRoutes'
import AdminList from '../../../Admin/AdminCrud'
import { Cards } from './Cards/Cards'

import { WrapperFeed } from './styles'

type Props = {}

export const Feed = (props: Props) => {
  const user =  useAppSelector((state: RootState) => state.authUser.data);
  const renderFeed = () => {
    // return data.map(user => <Cards name={user.nome} stacks={undefined} userFoto={user.foto}/>)
    return <Cards name={user.nome} stacks={['Docker']} userFoto={user.foto}/>
  }
  return <WrapperFeed>{renderFeed()}</WrapperFeed>
}
