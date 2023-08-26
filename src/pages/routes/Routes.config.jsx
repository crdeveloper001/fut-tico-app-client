// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard } from '../components/Dashboard/Dashboard.component'
import { Register } from '../components/Register/Register.component'
import { Login } from '../components/Login/Login.component'
import { Fields } from '../components/Fields/Fields.component'
import { AdminDashboard } from '../components/AdminDashboard/AdminDashboard';
import { ClientDashboard } from '../components/ClientDashboard/ClientDashboard';
import { ClientReservations } from '../components/ClientDashboard/ClientReservations/ClientReservations'
import { ClientProfile } from '../components/ClientDashboard/ClientProfile/ClientProfile'
import { CurrentFields } from '../components/AdminDashboard/CurrentFields/CurrentFields'
import { AdminProfile } from '../components/AdminDashboard/Profile/AdminProfile'
import { ClientTournaments } from '../components/ClientDashboard/ClientTournaments/ClientTournaments'

export const RoutesConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/Home' element={<Dashboard />} />
        <Route path='/SearchField' element={<Fields />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Admin-Dashboard' element={<AdminDashboard />} />
        <Route path='/Admin-CurrentFields' element={<CurrentFields />} />
        <Route path='/Admin-CurrentReservations' element={<CurrentFields />} />
        <Route path='/Admin-CurrentTournaments' element={<CurrentFields />} />
        <Route path='/Admin-Profile' element={<AdminProfile />} />
        <Route path='/Client-Dashboard' element={<ClientDashboard />} />
        <Route path='/Client-Reservation' element={<ClientReservations />} />
        <Route path='/Client-Tournaments' element={<ClientTournaments/> } />
        <Route path='/Client-Profile' element={<ClientProfile />} />

      </Routes>

    </BrowserRouter>
  )
}
