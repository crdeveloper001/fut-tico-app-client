import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import { Dashboard } from '../components/Dashboard/Dashboard.component'
import { Register } from '../components/Register/Register.component'
import { Login } from '../components/Login/Login.component'

export const RoutesConfig = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/Home' element={<Dashboard/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Register' element={<Register/>}/>
            
        </Routes>
    
    </BrowserRouter>
  )
}
