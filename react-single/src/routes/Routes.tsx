// @flow
import * as React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { Home } from '../features/Home'
import { Cadastro } from '../features/cadastro/Cadastro'
import { Detalhe } from '../features/detalhe/Detalhe'
import { Home } from './features/Home'
import { Cadastro } from './features/cadastro/Cadastro'
import { Detalhe } from './features/detalhe/Detalhe'
import Profile from './features/Profile'

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
