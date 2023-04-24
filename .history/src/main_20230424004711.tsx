import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux"
import App from './App.tsx'

import {store}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider >
       <App />
    </Provider>
   
  </React.StrictMode>,
)