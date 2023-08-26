import React from 'react'
import { GeneralMenuAdmin } from './GeneralMenuAdmin/GeneralMenuAdmin'
import { AdminNavigation } from './AdminNavigation/AdminNavigation'
import { AdminProfile } from './Profile/AdminProfile'

export const AdminDashboard = () => {
  return (
    <div>

      <AdminNavigation/>
      <GeneralMenuAdmin/>
      <AdminProfile/>
    </div>
  )
}
