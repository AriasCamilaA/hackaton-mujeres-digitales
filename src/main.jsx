import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import './styles/global.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NextUIProvider>
      <Toaster position="top-right" reverseOrder={false} />
      <App />
    </NextUIProvider>
  </StrictMode>,
)
