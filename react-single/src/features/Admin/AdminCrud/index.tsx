// @flow
import * as React from 'react'
import { Col } from 'react-bootstrap'
import IconCircle from '../../../components/IconCircle'
import If from '../../../components/If'
import InputSearch from '../../../components/InputSearch'
import { SubTitle } from '../../../styles/global'
import { StacksType } from '../../../types/cadastro'
import AddButton from '../components/AddButton'
import AdminCard from '../components/AdminCard'
import AdminList from '../components/AdminList'
import Loader from '../components/Loader'
import { AddWrapper, CrudWrapper } from './styles'
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
    <CrudWrapper className="pt-3">
      <div className="mt-4 w-100 d-flex justify-content-center wrap">
        <SubTitle>{title}</SubTitle>
      </div>
      <div className="mt-5 row justify-content-center mx-0">
        <Col className="d-flex justify-content-center search" sm={7}>
          <InputSearch
            placeholder="Buscar..."
            value={searchInputValue}
            setValue={async (e: any) => {
              search(e)
            }}
          />
        </Col>
        <Col className="ms-4 mt-3 mt-sm-0 d-flex justify-content-center" sm={2}>
          <AddButton onClick={() => toggleIsNew(!isNew)} />
        </Col>
      </div>
        <If test={isNew}>
          <AddWrapper className="mt-5 col-12">
            <AdminCard
              key="new"
              isNew={isNew}
              onClear={() => toggleIsNew(!isNew)}
              onConfirm={create}
            />
          </AddWrapper>
        </If>
      <If test={!isNew}>
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
      </If>
    </CrudWrapper>
  )
}

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export default AdminCrud
