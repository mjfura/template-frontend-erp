import { ErrorResponserValue, SuccessResponserValue } from '@/core/Responsers/domain'
import { EmpresaRepository, EmpresaValue } from '../domain'

export class EmpresaUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (private readonly repository:EmpresaRepository) {}
  public async getInfoEmpresa (subdominio:string):Promise<ErrorResponserValue|SuccessResponserValue<EmpresaValue>> {
    try {
      const data = await this.repository.getInfoEmpresa(subdominio)
      return data
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
}
