import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Getdata from './components/Getdata.jsx'
import Getone from './components/Getone.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Getdata/>
  </React.StrictMode>,
)
