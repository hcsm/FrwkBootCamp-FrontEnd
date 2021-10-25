// @flow
import * as React from 'react'
import { Col } from 'react-bootstrap'
import If from '../../../components/If'
import InputSearch from '../../../components/InputSearch'
import { SubTitle } from '../../../styles/global'
import { StacksType } from '../../../types/cadastro'
import AddButton from '../components/AddButton'
import AdminCard from '../components/AdminCard'
import AdminList from '../components/AdminList'
import Loader from '../components/Loader'
import { AddWrapper, ListWrapper } from './styles'
type Props = {
  title: string
  fetch: any
  create: any
  update: any
  remove: any
}

const AdminCrud = ({ title, fetch, create, update, remove }: Props) => {
  const [isNew, toggleIsNew] = React.useState(false)
  const [searchInputValue, setSearchInputValue] = React.useState('')
  const values = fetch()
  const [searchlist, setSearchlist] = React.useState<StacksType[]>([])

  const forceReaload = async () => {
    values.isFetching = true
    await sleep(600)
    values.isFetching = false
  }
  const search = async (value: string) => {
    setSearchInputValue(value)
    await forceReaload()
    if (values.data) {
      setSearchlist(
        [...values?.data].filter(elem =>
          value
            ? elem.label
                .toUpperCase()
                .trim()
                .includes(value.toUpperCase().trim())
            : elem
        )
      )
    }
  }
  return (
    <>
      <ListWrapper className="pt-3">
        <div className="mt-4 w-100 d-flex justify-content-center wrap">
          <SubTitle>{title}</SubTitle>
        </div>
        <div className="mt-5 row justify-content-center">
          <Col className="" md={7}>
            <InputSearch
              placeholder="Buscar..."
              value={searchInputValue}
              setValue={async (e: any) => {
                search(e)
              }}
            />
          </Col>
          <Col className="ms-4" md={2}>
            <AddButton onClick={() => toggleIsNew(!isNew)} />
          </Col>
        </div>
        <If test={isNew}>
          <AddWrapper className="mt-5">
            <AdminCard
              key="new"
              isNew={isNew}
              onClear={() => toggleIsNew(!isNew)}
              onConfirm={create}
            />
          </AddWrapper>
        </If>
        {values.isLoading || values.isFetching ? (
          <Loader />
        ) : (
          <AdminList
            error={values.error}
            isError={values.isError}
            isSuccess={values.isSuccess}
            querySearch={searchInputValue}
            data={searchInputValue ? searchlist : values.data}
            update={update}
            remove={remove}
          />
        )}
      </ListWrapper>
    </>
  )
}

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export default AdminCrud
