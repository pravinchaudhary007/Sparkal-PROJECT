import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FilterProvider } from './Components/Pages/Product/FilterContext/FilterContext.jsx' 
import { ProductProvider } from './Components/Pages/Product/ProductContext/ProductProvider.jsx' 


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FilterProvider>
    <ProductProvider >
    <App />
    </ProductProvider >
    </FilterProvider>
  </StrictMode>,
)
