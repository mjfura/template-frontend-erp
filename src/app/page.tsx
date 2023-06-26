import { LoginForm } from './components'
import { empresaUseCase } from '@/core/Empresas/dependencies'
import { getSubdominio } from '@/utils'

export default async function Login () {
  const subdominio = getSubdominio()
  const response = await empresaUseCase.getInfoEmpresa(subdominio)

  return (
    <section className="flex min-h-screen bg-[url('/img/gym_bg.jpg')] bg-no-repeat bg-center bg-cover">
      <div className='bg-[rgba(0,0,0,0.7)] flex flex-1 justify-center items-center min-h-screen' >
      {
        response.status
          ? <LoginForm empresa={response.data} />
          : <h2>{response.message}</h2>
      }
      </div>
    </section>
  )
}
