// @flow
import * as React from 'react'
import { Redirect, Route, Switch, useHistory } from 'react-router'
import { Cadastro } from '../features/cadastro'
import { Detalhe } from '../features/detalhe'
import { Home } from '../features/Home'
import Profile from '../features/Profile'
import { PrivateRoute } from './PrivateRoute'

type Props = {}
const Routes = (props: Props) => {
  return (
    <Switch>
      <PrivateRoute path="/home" component={Home} />
      <PrivateRoute path="/detalhe" component={Detalhe} />
      <PrivateRoute path="/perfil" component={Profile} />
      <Route path="/cadastro" component={Cadastro} />
      <Route
        path="/login"
        component={() => {
          // redirect to login page (angular)
          window.location.href = window.location.origin + '/login'
          return (<></>)
        }}
      />
      <Redirect from="*" to="/home" />
    </Switch>
  )
}

export default Routes
