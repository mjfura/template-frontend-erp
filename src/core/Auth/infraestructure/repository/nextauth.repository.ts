import { ErrorResponserValue, SuccessResponserValue } from '@/core/Responsers/domain'
import { AuthRepository, LoginCredentialsValue } from '../../domain'

export class NextAuthRepository implements AuthRepository {
  async login (credentials:LoginCredentialsValue): Promise<SuccessResponserValue<any> | ErrorResponserValue> {
    try {
      if (!credentials.correo) throw new Error('No se envió el correo')
      if (!credentials.password) throw new Error('No se envió la contraseña')
      if (!credentials.idEmpresa) throw new Error('No se envió la empresa')
      // ejecutar request a la api de next auth
      // const { data } = await api.get(`/empresas/getEmpresaBySubdominio?subdominio=${subdominio}`)
      const value = new SuccessResponserValue({
        status: true,
        title: 'Sesión exitosa',
        message: 'Sesión iniciada correctamente',
        data: {}
      })
      return value
    } catch (e) {
      const error = e as Error
      if (error.message) {
        return new ErrorResponserValue({
          status: false,
          message: error.message,
          title: 'Error'
        })
      }

      return new ErrorResponserValue({
        status: false,
        message: 'No se pudo iniciar sesión correctamente',
        title: 'Error'
      })
    }
  }
}
