// eslint-disable-next-line no-unused-vars
import React from 'react'
import './ClientDashboard.css'
import { ClientProfile } from './ClientProfile/ClientProfile'
import { GeneralFooter } from '../GeneralFooter/GeneralFooter'

export const ClientDashboard = () => {
  return (

    <div className='ClientBackground'>
      
      <ClientProfile/>
      <GeneralFooter/>
    </div>
  )
}
