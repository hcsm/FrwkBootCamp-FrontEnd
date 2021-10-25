import * as React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import AdminCrud from '../features/Admin/AdminCrud'
import { Feed } from '../features/detalhe/components/feed/Feed'
import {
  useRemoveEspecialidadesMutation,
  useCreateEspecialidadesMutation,
  useUpdateEspecialidadesMutation,
  useGetEspecialidadesQuery,
} from '../services/especialidades'
import {
  useGetStacksQuery,
  useUpdateStacksMutation,
  useCreateStacksMutation,
  useRemoveStacksMutation,
} from '../services/stacks'

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
      <Route exact path="/detalhe/especialidades">
        <AdminCrud
          title="Especialidades"
          fetch={useGetEspecialidadesQuery}
          create={createEspecialidades}
          update={updateEspecialidades}
          remove={removeEspecialidades}
        />
      </Route>
      <Route path="/detalhe/stacks">
        <AdminCrud
          title="Stacks"
          fetch={useGetStacksQuery}
          create={createStacks}
          update={updateStacks}
          remove={removeStacks}
        />
      </Route>
      <Route path="/detalhe/feed" component={Feed} />
      <Redirect from="*" to="/detalhe/feed" />
    </Switch>
  )
}

export default HomeRoutes
