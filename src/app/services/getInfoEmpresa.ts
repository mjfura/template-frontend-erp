import axios, { AxiosError } from 'axios'

export async function getInfoEmpresa (subdomain:string) {
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
