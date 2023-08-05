'use client'
import React from 'react'
import { Button } from '../../../components'
import { authUseCase } from '@/core/Auth/infraestructure/dependencies'
function LogoutButton () {
  const handler = () => {
    authUseCase.logout()
  }
  return (
       <Button onClick={handler}>
        Cerrar Sesión
       </Button>
  )
}

export { LogoutButton }
