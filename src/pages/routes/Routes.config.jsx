import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard } from '../components/Dashboard/Dashboard.component'
import { Register } from '../components/Register/Register.component'
import { Login } from '../components/Login/Login.component'
import { Fields } from '../components/Fields/Fields.component'

export const RoutesConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/Home' element={<Dashboard />} />
        <Route path='/SearchField' element={<Fields />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />

      </Routes>

    </BrowserRouter>
  )
}
