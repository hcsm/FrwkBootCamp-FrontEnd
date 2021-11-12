import * as React from 'react'
import InputSearch from '../../../../components/InputSearch'
import { searchValue } from '../../../../services/Enums'
import { useGetProfessionalsQuery } from '../../../../services/users'
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
          UserFoto={user.foto}
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
