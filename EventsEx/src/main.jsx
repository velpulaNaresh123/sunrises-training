import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import OnClickEx1 from './components/OnClickEx1.jsx'
import OnDoubleClickEx1 from './components/OnDoubleClickEx1.jsx'
import OnClickEx2 from './components/OnClickEx2.jsx'
import OnDoubleClickEx2 from './components/OnDoubleClickEx2.jsx'
import OnClickChangeStateValue from './components/OnClickChangeStateValue.jsx'
import OnClickIncrement from './components/OnClickIncrement.jsx'
import ConditionalRenderingEx1 from './components/ConditionalRenderingEx1.jsx'
import CondetionalRenEx2 from './components/CondetionalRenEx2.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CondetionalRenEx2/>
  </React.StrictMode>
)
