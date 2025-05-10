import React from 'react'
import { BrowserRouter,Routes,Route,Outlet } from 'react-router-dom'
import Layout from './components/Layout'
import Landing from './components/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Forgetpass from './components/Forgetpass'

export default function App() {
  
  return (
   <BrowserRouter >
     <Routes>
      <Route  path='/' element={<Layout/>}>
        <Route index element={<Landing/>}/>
        <Route path="signup"  element={<Register/>}/>
        <Route path="login"  element={<Login/>}/>
      </Route>
      <Route path="*" element={<h2>page not found</h2>} />
      <Route path="/forgetpass" element={<Forgetpass/>} />
     </Routes>
    </BrowserRouter>
  )
}
