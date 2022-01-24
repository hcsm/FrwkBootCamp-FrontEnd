import * as React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import AdminCrud from '../features/Admin/AdminCrud'
import { ManageUsers } from '../features/Admin/ManageUsers'
import { Feed } from '../features/detalhe/components/feed/Feed'
import {
  useCreateEspecialidadesMutation,
  useGetEspecialidadesQuery,
  useRemoveEspecialidadesMutation,
  useUpdateEspecialidadesMutation,
} from '../services/especialidades'
import {
  useCreateStacksMutation,
  useGetStacksQuery,
  useRemoveStacksMutation,
  useUpdateStacksMutation,
} from '../services/stacks'
import { PrivateRoute } from './PrivateRoute'

type Props = {}
const HomeRoutes = (props: Props) => {
  const [createEspecialidades] = useCreateEspecialidadesMutation()
  const [updateEspecialidades] = useUpdateEspecialidadesMutation()
  const [removeEspecialidades] = useRemoveEspecialidadesMutation()
  const [createStacks] = useCreateStacksMutation()
  const [updateStacks] = useUpdateStacksMutation()
  const [removeStacks] = useRemoveStacksMutation()
  return (
    <Switch>
      <PrivateRoute
        exact
        path="/detalhe/especialidades"
        component={() => (
          <AdminCrud
            title="Especialidades"
            fetch={useGetEspecialidadesQuery}
            create={createEspecialidades}
            update={updateEspecialidades}
            remove={removeEspecialidades}
          />
        )}
      />
      <PrivateRoute
        path="/detalhe/stacks"
        component={() => (
          <AdminCrud
            title="Stacks"
            fetch={useGetStacksQuery}
            create={createStacks}
            update={updateStacks}
            remove={removeStacks}
          />
        )}
      />
      <PrivateRoute path="/detalhe/feed" component={Feed} />
      <PrivateRoute path="/detalhe/usuarios" component={ManageUsers} />
      <Redirect from="*" to="/detalhe/feed" />
    </Switch>
  )
}

export default HomeRoutes
