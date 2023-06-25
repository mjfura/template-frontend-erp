import { headers } from 'next/headers'
import { LoginForm } from './components'
import { getInfoEmpresa } from './services'

export default async function Login () {
  const { get } = headers()
  const subdominio = get('host')?.split('.')[0]
  const { data } = await getInfoEmpresa(subdominio ?? '')
  return (
    <section className="flex min-h-screen bg-[url('/img/gym_bg.jpg')] bg-no-repeat bg-center bg-cover">
      <div className='bg-[rgba(0,0,0,0.7)] flex flex-1 justify-center items-center min-h-screen' >

      <LoginForm empresa={data} />
      </div>
    </section>
  )
}
