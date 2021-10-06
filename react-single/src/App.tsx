import React from 'react'
import { ToastContainer } from 'react-toastify'
import { Cadastro } from './features/cadastro/Cadastro'

import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Cadastro />
    </div>
  )
}

export default App
