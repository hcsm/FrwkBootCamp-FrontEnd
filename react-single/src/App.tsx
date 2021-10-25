import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import store from './app/store'
import { especialidadeApi } from './services/especialidades'
import { stacksApi } from './services/stacks'
import { GlobalStyle } from './styles/global'
import Routes from './routes/Routes'
const voidValue = (function () {})()
store.dispatch(stacksApi.util.prefetch('getStacks', voidValue, {}))

store.dispatch(
  especialidadeApi.util.prefetch('getEspecialidades', voidValue, {})
)

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
