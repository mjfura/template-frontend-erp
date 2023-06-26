import { ErrorResponserValue, SuccessResponserValue } from '@/core/Responsers/domain'
import { EmpresaRepository, EmpresaValue } from '../../domain'
import { api } from '@/config'
import axios, { AxiosError } from 'axios'

export class AxiosRepository implements EmpresaRepository {
  async getInfoEmpresa (subdominio: string): Promise<SuccessResponserValue<EmpresaValue> | ErrorResponserValue> {
    try {
      if (!subdominio) throw new Error('No se pudo obtener el subdominio')
      const { data } = await api.get(`/empresas/getEmpresaBySubdominio?subdominio=${subdominio}`)
      return data
    } catch (e) {
      if (axios.isAxiosError(e)) {
        const error = e as AxiosError<{
        message: string
        title: string
        status: boolean
      }>
        console.log('error ', error)
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
}
