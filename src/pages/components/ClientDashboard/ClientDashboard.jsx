import React from 'react'
import { ClientNavigation } from './ClientNavigation/ClientNavigation'
import { ClientProfile } from './ClientProfile/ClientProfile'
import { GeneralMenuClient } from './GeneralMenuClient/GeneralMenuClient'

export const ClientDashboard = () => {
  return (

    <div>
    
      <ClientNavigation />
      <GeneralMenuClient />
      <ClientProfile/>
    </div>
  )
}
