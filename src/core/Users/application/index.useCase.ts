import { ErrorResponserValue, SuccessResponserValue } from '@/core/Responsers/domain'
import { UserPayload, UserRepository, UserValue } from '../domain'

export class UserUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (private readonly repository:UserRepository) {}
  public async getUsersByEmpresa (idEmpresa:string):Promise<ErrorResponserValue|SuccessResponserValue<UserValue[]>> {
    try {
      const data = await this.repository.getUsersByEmpresa(idEmpresa)
      if (data instanceof ErrorResponserValue) return data
      const result = new SuccessResponserValue({
        title: 'Consulta exitosa',
        message: 'Consulta exitosa',
        status: true,
        data

      })
      return result
    } catch (e) {
      console.log('error use case ', e)
      const error = new ErrorResponserValue({
        title: 'Ha ocurrido un error',
        message: 'Error en el caso de uso',
        status: false
      })
      return error
    }
  }

  public async getUserById (idUser:string):Promise<ErrorResponserValue|SuccessResponserValue<UserValue>> {
    try {
      const data = await this.repository.getUserById(idUser)
      if (data instanceof ErrorResponserValue) return data
      const result = new SuccessResponserValue({
        title: 'Consulta exitosa',
        message: 'Usuario encontrado exitosamente',
        status: true,
        data

      })
      return result
    } catch (e) {
      console.log('error use case ', e)
      const error = new ErrorResponserValue({
        title: 'Ha ocurrido un error',
        message: 'Error en el caso de uso',
        status: false
      })
      return error
    }
  }

  public async editUser (idUser:string, user:Partial<Omit<UserPayload, 'empresa_id'|'password'>>):Promise<ErrorResponserValue|SuccessResponserValue<{}>> {
    try {
      const data = await this.repository.editUser(idUser, user)
      if (data instanceof ErrorResponserValue) return data
      return data
    } catch (e) {
      const error = new ErrorResponserValue({
        title: 'Ha ocurrido un error',
        message: 'Error en el caso de uso',
        status: false
      })
      return error
    }
  }

  public async deleteUser (idUser:string):Promise<ErrorResponserValue|SuccessResponserValue<{}>> {
    try {
      const data = await this.repository.deleteUser(idUser)
      if (data instanceof ErrorResponserValue) return data
      return data
    } catch (e) {
      const error = new ErrorResponserValue({
        title: 'Ha ocurrido un error',
        message: 'Error en el caso de uso',
        status: false
      })
      return error
    }
  }

  public async createUser (idEmpresa:string, user:Omit<UserPayload, 'empresa_id'>):Promise<ErrorResponserValue|SuccessResponserValue<{}>> {
    try {
      const data = await this.repository.createUser({
        empresa_id: idEmpresa,
        ...user
      })
      if (data instanceof ErrorResponserValue) return data
      return data
    } catch (e) {
      const error = new ErrorResponserValue({
        title: 'Ha ocurrido un error',
        message: 'Error en el caso de uso',
        status: false
      })
      return error
    }
  }
}
