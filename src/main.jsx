import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import router from './router/Router.jsx'
import AuthProvider from './context/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    
      <RouterProvider router={router}>
      <ToastContainer />
      </RouterProvider>
    
    
    </AuthProvider>
  </StrictMode>,
)
