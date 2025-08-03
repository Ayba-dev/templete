import { StrictMode } from 'react'
import { Routing } from '@app/lib/routing.tsx'
import { RouterProvider } from 'react-router-dom'
import './global.css'


export const App = () => (
  <StrictMode>
    <RouterProvider router={Routing} />
  </StrictMode>
)
