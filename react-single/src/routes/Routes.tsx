// @flow
import * as React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { Cadastro } from '../features/cadastro'
import { Detalhe } from '../features/detalhe'
import { Home } from '../features/Home'
import Profile from '../features/Profile'

type Props = {}
const Routes = (props: Props) => {
  return (
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/detalhe" component={Detalhe} />
      <Route path="/perfil" component={Profile} />
      <Redirect from="*" to="/home" />
    </Switch>
  )
}

export default Routes
