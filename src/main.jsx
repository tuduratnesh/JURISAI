import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import Dashboard from './Components/Dashboard'
import Analytics from './Components/Analytics'
import Documents from './Components/Documents'
import Settings from './Components/Settings'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Layout from "./Layout";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
     <Route path='/' element={<Layout/>}>
     <Route path='/' element={<Dashboard/>}/>
     <Route path='login' element={<Login/>}/>
     <Route path='signup' element={<Signup/>}/>
     <Route path='analytics' element={<Analytics/>}/>
     <Route path='documents' element={<Documents/>}/>
     <Route path='settings' element={<Settings/>}/>
     </Route>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
