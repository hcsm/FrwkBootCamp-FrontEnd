import React from 'react'
import { ToastContainer } from 'react-toastify';

import { Cadastro } from './features/cadastro/Cadastro'

function App() {
  return (
    <div className="App">
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
