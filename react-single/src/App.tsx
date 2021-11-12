import 'bootstrap/dist/css/bootstrap.min.css'
import * as React from 'react'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import store, { setUser } from './app/store'
import { especialidadeApi } from './services/especialidades'
import { stacksApi } from './services/stacks'
import { GlobalStyle } from './styles/global'
import Routes from './routes/Routes'
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

Sentry.init({
  dsn: "https://1d820fec7e7e40e29cd48b5a5ef9309c@o1054620.ingest.sentry.io/6040085",
  integrations: [new Integrations.BrowserTracing()],

  tracesSampleRate: 1.0,
});

Sentry.setUser({ email:"exemplo@frwk.com.br" });

const voidValue = (function () {})()
store.dispatch(stacksApi.util.prefetch('getStacks', voidValue, {}))

store.dispatch(
  especialidadeApi.util.prefetch('getEspecialidades', voidValue, {})
)

window.addEventListener('user-logged-in', (event: CustomEventInit) => {
  store.dispatch(setUser(event.detail))
})


function App() {
  return (
    <>
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
    </>
  )
}

export default Sentry.withProfiler(App);
