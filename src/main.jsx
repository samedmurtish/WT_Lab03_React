import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// StrictMode geliştirme sırasında bazı işleri bilerek iki kez çalıştırır (Deney 5'te gözleyeceksiniz).
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
