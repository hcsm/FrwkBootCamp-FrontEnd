import React from 'react'
import { ToastContainer } from 'react-toastify'
import { Cadastro } from './features/cadastro/Cadastro'

import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { GlobalStyle } from './styles/global'
import store from './app/store'
import { Provider } from 'react-redux'

function App() {
  return (
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
        <Cadastro />
      </div>
    </Provider>
  )
}

export default App
