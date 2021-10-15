// @flow
import * as React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { Cadastro } from './features/cadastro/Cadastro'
import { Home } from './features/Home'
type Props = {}
const Routes = (props: Props) => {
  return (
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route path="/cadastro" component={Cadastro} />
      <Redirect from="*" to="/" />
    </Switch>
  )
}

export default Routes
