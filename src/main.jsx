import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.less'
import { BrowserRouter } from 'react-router-dom'
import './i18n'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
