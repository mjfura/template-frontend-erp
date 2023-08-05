import { ErrorResponserValue, SuccessResponserValue } from '@/core/Responsers/domain'
import { AuthRepository, LoginCredentialsValue } from '../../domain'
import { signIn, signOut } from 'next-auth/react'

export class NextAuthRepository implements AuthRepository {
  async login (credentials:LoginCredentialsValue, basePath:string): Promise<SuccessResponserValue<any> | ErrorResponserValue> {
    try {
      if (!credentials.correo) throw new Error('No se envió el correo')
      if (!credentials.password) throw new Error('No se envió la contraseña')
      if (!credentials.idEmpresa) throw new Error('No se envió la empresa')
      // ejecutar request a la api de next auth
      const response = await signIn('credentials', {
        correo: credentials.correo,
        password: credentials.password,
        idEmpresa: credentials.idEmpresa,
        redirect: false,
        callbackUrl: `${basePath}/account`
      })
      console.log('response infrstructure ', response)
      if (!response) throw new Error('No se pudo iniciar sesión correctamente')
      if (response.error) throw new Error(response.error)

      const value = new SuccessResponserValue({
        status: true,
        title: 'Sesión exitosa',
        message: 'Sesión iniciada correctamente',
        data: {}
      })
      return value
    } catch (e) {
      console.log('error ', e)
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

  async logout ():Promise<undefined> {
    try {
      await signOut()
    } catch (e) {
      console.log('Error al hacer un logout repository ', e)
    }
  }
}
