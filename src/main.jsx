import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FilterProvider } from './Components/Pages/Product/FilterContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FilterProvider>
    <App />
    </FilterProvider>
  </StrictMode>,
)
