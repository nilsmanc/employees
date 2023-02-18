import React from 'react'
import ReactDOM from 'react-dom/client'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Provider } from 'react-redux'

import App from './App'
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <CssBaseline />
    <App />
  </Provider>,
)
