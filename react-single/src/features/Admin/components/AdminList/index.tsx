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
import * as Sentry from '@sentry/react'

type Props = {
  data?: StacksType[]
  error?: any
  isError?: boolean
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
  remove
}: Props) => {
  const [value, setValue] = React.useState(0) // integer state
  function useForceUpdate() {
    return () => setValue(value => value + 1) // update the state to force render
  }
  React.useEffect(() => {
    useForceUpdate()
  }, [data])
  if (isSuccess && data) {
    const rowRenderer = ({ key, index, style }: ListRowProps) => {
      return (
        <div key={data[index].nome} style={style}>
          <AdminCard
            currentValue={data[index]}
            onConfirm={update}
            onRemove={() => remove(data[index].id)}
          />
        </div>
      )
    }
    return (
      <ListWrapper className="mt-5" key={value}>
        <AutoSizer key={value}>
          {({ height, width }) => (
              <List
                className="list"
                height={height}
                rowCount={data.length}
                rowHeight={130}
                rowRenderer={rowRenderer}
                width={width}
                key={value}
              />
          )}
        </AutoSizer>
      </ListWrapper>
    )
  } else if (isError) {
    Sentry.captureException(isError)
    // toast.error('Servidor indisponivel')
  }
  return <></>
}

export default AdminList
