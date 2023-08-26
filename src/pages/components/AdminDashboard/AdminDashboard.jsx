import React from 'react'

import { AdminNavigation } from './AdminNavigation/AdminNavigation'
import { AdminProfile } from './Profile/AdminProfile'

export const AdminDashboard = () => {
  return (
    <div>

      <AdminNavigation/>
      <AdminProfile/>
    </div>
  )
}
