// @flow
import * as React from 'react'
import InputSearch from '../../../components/InputSearch'
import { searchValue } from '../../../services/Enums'
import { useGetProfessionalsQuery } from '../../../services/users'
import { SubTitle } from '../../../styles/global'
import { UserCard } from './components/UserCard'
import { Wrapper } from './styles'

type Props = {}

export const ManageUsers = (props: Props) => {
  const [search, setSearch] = React.useState('')
  const { data, isError } = useGetProfessionalsQuery()
  const renderCards = data
    ?.filter(elem =>
      search && elem ? searchValue(elem, Object.keys(elem), search) : elem
    )
    ?.map(user => (
      <UserCard
        key={user.professionalId}
        name={user.nome}
        id={user.professionalId}
        foto={user.foto ?? undefined}
      />
    ))
  return (
    <Wrapper>
      <div className="mt-4 w-100 d-flex justify-content-center wrap">
        <SubTitle>{'Usuários'}</SubTitle>
      </div>
      <div className="m-5 row justify-content-center">
        <InputSearch
          placeholder="Buscar..."
          value={search}
          setValue={setSearch}
        />
      </div>
      <div className="my-4 d-flex flex-column align-items-center h-100">
        {renderCards}
      </div>
    </Wrapper>
  )
}
