import { TableUsers } from './components/TableUsers'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import { userUseCase } from '@/core/Users/dependencies'

export default async function UsersSettings () {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/')
  const response = await userUseCase.getUsersByEmpresa(session.empresa.id)

  return <section className='flex justify-center items-center p-4 '>
    <TableUsers listUsers={response.status ? response.data : []}/>
  </section>
}
