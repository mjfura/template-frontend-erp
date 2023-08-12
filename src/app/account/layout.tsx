import { ReactNode } from 'react'
import { Metadata } from 'next'
import { NavLayout } from './components/NavLayout'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

export const metadata:Metadata = {
  title: 'Botica Manager',
  description: 'Plataforma para la gestión avanzada de inventariado en boticas'
}

export default async function AccountLayout ({
  children
}: {
  children: ReactNode
}) {
  const session = await getServerSession(authOptions)
  console.log('session ', session)
  if (!session) redirect('/')
  return (
    <section className='min-h-screen p-4' >
        <NavLayout basepath={session.empresa.basepath} nombre={session.empresa.nombre} />
        <main>
        {children}
        </main>
    </section>

  )
}
