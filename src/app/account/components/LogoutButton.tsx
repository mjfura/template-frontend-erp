'use client'
import React from 'react'
import { Button } from '../../../components'
import { signOut } from 'next-auth/react'
function LogoutButton () {
  const handler = () => {
    signOut()
  }
  return (
       <Button onClick={handler}>
        Cerrar Sesión
       </Button>
  )
}

export { LogoutButton }
