import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Factory from './components/Factory.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Factory />
  </StrictMode>,
)
