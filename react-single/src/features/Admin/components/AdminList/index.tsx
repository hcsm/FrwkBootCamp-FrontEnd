// @flow
import * as React from 'react'
import AdminCard from '../AdminCard'
import { AutoSizer, List, ListRowProps } from 'react-virtualized'
import { CircularProgress } from '@material-ui/core'
import { ListWrapper } from './styles'
import { StacksType } from '../../../../types/cadastro'
import { toast } from 'react-toastify'
import Loader from '../Loader'
import If from '../../../../components/If'

type Props = {
  data?: StacksType[]
  error?: any
  isError?: boolean
  querySearch?: string
  isSuccess?: boolean
  update: any
  remove: any
}

const AdminList = ({
  data,
  isSuccess,
  isError,
  error,
  update,
  remove,
  querySearch,
}: Props) => {
  if (isSuccess && data) {
    const rowRenderer = ({ key, index, style }: ListRowProps) => {
      return (
        <div key={key} style={style}>
          <AdminCard
            currentValue={data[index]}
            onConfirm={update}
            onRemove={() => remove(data[index].id)}
          />
        </div>
      )
    }

    return (
      <ListWrapper className="mt-5">
        <AutoSizer>
          {({ height, width }) => (
            <List
              className="list"
              height={height}
              rowCount={data.length}
              rowHeight={100}
              rowRenderer={rowRenderer}
              width={width}
            />
          )}
        </AutoSizer>
      </ListWrapper>
    )
  } else if (isError) {
    toast.error('Servidor indisponivel')
  }
  return <></>
}

export default AdminList
