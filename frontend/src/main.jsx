import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TechStackProvider from './context/TechStackProvider.jsx'

createRoot(document.getElementById('root')).render(
    <TechStackProvider>
        <App />
    </TechStackProvider>
)
