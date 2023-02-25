import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import CardListProvider from './context/CardListProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CardListProvider>
      <App />
    </CardListProvider>
  </React.StrictMode>,
)
