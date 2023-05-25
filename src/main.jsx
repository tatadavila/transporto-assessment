// @vendors
import React from 'react'
import ReactDOM from 'react-dom/client'

// @components
import App from './App.jsx'

// @styles
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
