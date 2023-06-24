import axios, { AxiosError } from 'axios'
import { headers } from 'next/headers'
import { LoginForm } from './components'
async function getInfoEmpresa (subdomain:string) {
  try {
    if (!subdomain) throw new Error('No se pudo obtener el subdominio')
    const { data } = await axios.get(`http://localhost:4000/api/empresas/getEmpresaBySubdominio?subdomino=${subdomain}`)
    return data
  } catch (e) {
    if (axios.isAxiosError(e)) {
      const error = e as AxiosError<{
        message: string
        title: string
        status: boolean
      }>
      return {
        status: false,
        message: error.response?.data?.message ?? 'Ruta errónea',
        title: 'Error'
      }
    }
    const error = e as Error
    if (error.message) {
      return {
        status: false,
        message: error.message,
        title: 'Error'
      }
    }

    return {
      status: false,
      message: 'No se pudo obtener la información de la empresa',
      title: 'Error'
    }
  }
}
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
