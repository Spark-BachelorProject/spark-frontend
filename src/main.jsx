import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import AppProviders from './providers/AppProviders'
import { store } from './store'
import App from './views/App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppProviders>
        <App />
      </AppProviders>
    </Provider>
  </React.StrictMode>
)
