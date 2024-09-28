import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import * as themes from './theme/schema.json'
import {setToLS} from './utils/storage.ts'

const Index = () => {
  setToLS('all-themes', themes.default);

  return(
    <App />
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Index />
  </StrictMode>,
)
