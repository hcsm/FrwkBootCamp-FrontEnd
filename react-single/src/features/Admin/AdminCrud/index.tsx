// @flow
import * as React from 'react'
import { UseQuery } from '@reduxjs/toolkit/dist/query/react/buildHooks'
import { Col } from 'react-bootstrap'
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
  const state = fetch();

  const [isNew, toggleIsNew] = React.useState(false)
  const [searchInputValue, setSearchInputValue] = React.useState('')
  const [searchlist, setSearchlist] = React.useState<StacksType[]>([])

  const forceReaload = async () => {
    state.isFetching = true
    await sleep(600)
    state.isFetching = false
  }

  const search = async (value: string) => {
    setSearchInputValue(value)
    await forceReaload()
    if (state.data) {
      setSearchlist(
        [...state?.data].filter(elem =>
          value
            ? elem.nome
                .toUpperCase()
                .trim()
                .includes(value.toUpperCase().trim())
            : elem
        )
      )
    }
  }
  return (
    <If test={state}>
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
          <Col
            className="ms-md-4 mt-3 mt-sm-0 d-flex justify-content-center p-0"
            sm={2}
          >
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
          {state.isLoading || state.isFetching ? (
            <Loader />
          ) : (
            <AdminList
              error={state.error}
              isError={state.isError}
              isSuccess={state.isSuccess}
              data={searchInputValue ? searchlist : state.data}
              update={update}
              remove={remove}
            />
          )}
        </If>
      </CrudWrapper>
    </If>
  )
}

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export default AdminCrud
