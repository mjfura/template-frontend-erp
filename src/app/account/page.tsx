import { getServerSession } from 'next-auth/next'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import { LogoutButton } from './components/LogoutButton'

export default async function Account () {
  const session = await getServerSession(authOptions)
  console.log('session ', session)
  if (!session) redirect('/')
  return (
        <div>
            Account Logged
            <p>
                {session?.user.name}
            </p>
            <p>
                {session?.user.email}
            </p>
            <LogoutButton/>
        </div>
  )
}
