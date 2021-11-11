import * as React from 'react'
import { RootState, useAppSelector } from '../../../../app/store'
import InputSearch from '../../../../components/InputSearch'
import HomeRoutes from '../../../../routes/HomeRoutes'
import { useGetProfessionalsQuery } from '../../../../services/users'
import AdminList from '../../../Admin/AdminCrud'
import { Cards } from './Cards/Cards'

import { WrapperFeed } from './styles'

type Props = {}

export const Feed = (props: Props) => {
  const [search, setSearch] = React.useState('')
  const { data, isError } = useGetProfessionalsQuery()
  const renderFeed = () => {
    return data
      ?.filter(elem =>
        search && elem ? searchValue(elem, Object.keys(elem), search) : elem
      )
      .map(user => (
        <Cards
          key={user.professionalId}
          name={user.nome}
          stacksAprender={['DockerDockerDocker', 'Docker', 'Docker', 'Docker']}
          stackExperiencia={['ReactTS']}
          especialidade="Front-end"
          userFoto={user.foto}
        />
      ))
  }
  return (
    <WrapperFeed>
      <div className="m-5 d-flex justify-content-center">
        <InputSearch
          placeholder="Buscar..."
          value={search}
          setValue={setSearch}
        />
      </div>
      <div className="list">{renderFeed()}</div>
    </WrapperFeed>
  )
}

function searchValue(element: any, keys: string[], value: string) {
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index]
    if (
      element[key]?.toUpperCase()
      ?.trim()?.includes(value?.toUpperCase()?.trim())
    ) {
      return true
    }
  }
  return false
}
