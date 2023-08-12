'use client'
import React from 'react'
import { Button } from '../../../components'
import { authUseCase } from '@/core/Auth/infraestructure/dependencies'
import { useRouter } from 'next/navigation'
interface Props{
  basepath:string
}
function LogoutButton ({ basepath }:Props) {
  const { push } = useRouter()
  const handler = async () => {
    await authUseCase.logout(basepath)
    push('/')
  }
  return (
       <Button onClick={handler}>
        Cerrar Sesión
       </Button>
  )
}

export { LogoutButton }
