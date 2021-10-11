import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import store from './app/store'
import { Cadastro } from './features/cadastro/Cadastro'
import { GlobalStyle } from './styles/global'

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
