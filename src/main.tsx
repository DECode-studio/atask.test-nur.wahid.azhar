import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import MainPage from './page/index.tsx'
import './style/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainPage />
  </StrictMode>,
)
