import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import PrintSideBySide from '../components/PrintSideBySide.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrintSideBySide/>
  </React.StrictMode>,
)
