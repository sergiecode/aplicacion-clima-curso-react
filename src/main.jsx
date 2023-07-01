import React from 'react'
import ReactDOM from 'react-dom/client'
import { WheatherApp } from './WheatherApp'
import './styles/weatherStyles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WheatherApp />
  </React.StrictMode>,
)
