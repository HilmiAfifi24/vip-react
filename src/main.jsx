import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/login.jsx'
import RegisterPage from './pages/register.jsx'
import ProductPage from './pages/products.jsx'
import ProfilePage from './pages/profile.jsx'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage/>
  },
  {
    path: '/registrasi',
    element: <RegisterPage/>
  },
  {
    path: '/products',
    element: <ProductPage/>
  },
  {
    path: '/profile',
    element: <ProfilePage/>
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
