// eslint-disable-next-line no-unused-vars
import React from 'react'
import './AdminDashboard.css';
import { AdminProfile } from './Profile/AdminProfile'
import { GeneralFooter } from '../GeneralFooter/GeneralFooter';

export const AdminDashboard = () => {
  return (
    <div className='AdminDashboardBackground'>

      <AdminProfile />
      <GeneralFooter/>
    </div>
  )
}
