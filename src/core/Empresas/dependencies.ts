import { EmpresaUseCase } from './application'
import { AxiosRepository } from './infraestructure/repository'

const axiosRepository = new AxiosRepository()
export const empresaUseCase = new EmpresaUseCase(axiosRepository)
