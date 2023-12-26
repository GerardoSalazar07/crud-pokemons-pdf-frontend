import React from 'react'
import ReactDOM from 'react-dom/client'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFilePdf, faFire, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { PokemonsContextProvider } from "./context/PokemonsContext"
import App from './App.jsx'
import './index.css'

library.add(faFilePdf, faFire, faPenToSquare, faTrash)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PokemonsContextProvider>
      <App />
    </PokemonsContextProvider>
  </React.StrictMode>
)
