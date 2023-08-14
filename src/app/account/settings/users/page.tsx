import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import { SectionTableUsers } from './components/SectionTableUsers'

export default async function UsersSettings () {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/')
  // const response = await userUseCase.getUsersByEmpresa(session.empresa.id)

  return <section className='flex justify-center items-center p-4 '>
    <SectionTableUsers idEmpresa={session.empresa.id}/>
  </section>
}
