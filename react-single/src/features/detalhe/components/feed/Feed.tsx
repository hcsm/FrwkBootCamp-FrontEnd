import React from 'react'
import { RootState, useAppSelector } from '../../../../app/store'
import HomeRoutes from '../../../../routes/HomeRoutes'
import { useGetProfessionalsQuery } from '../../../../services/users'
import AdminList from '../../../Admin/AdminCrud'
import { Cards } from './Cards/Cards'
import { WrapperFeed } from './styles'

type Props = {}

export const Feed = (props: Props) => {
  const { data, isError } = useGetProfessionalsQuery()
  const renderFeed = () => {
    return data?.map(user => (
      <Cards key={user.professionalId} {...user} />
    ))
  }
  return (
    <WrapperFeed>
      {renderFeed()}
    </WrapperFeed>
  )
}
