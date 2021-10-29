import 'bootstrap/dist/css/bootstrap.min.css'
import * as React from 'react'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import store, { setUser } from './app/store'
import { especialidadeApi } from './services/especialidades'
import { stacksApi } from './services/stacks'
import { GlobalStyle } from './styles/global'
import Routes from './Routes'
import { UserType } from './types/global'

store.dispatch(stacksApi.util.prefetch('getStacks', null, {}))

store.dispatch(especialidadeApi.util.prefetch('getEspecialidades', null, {}))

window.addEventListener('user-logged-in', (event: CustomEventInit) => {
  store.dispatch(setUser(event.detail))
})

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <div className="App">
          <GlobalStyle />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Routes />
        </div>
      </Provider>
    </HashRouter>
  )
}

export default App
