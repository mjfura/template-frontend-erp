import { UserUseCase } from './application'
import { AxiosRepository } from './infrastructure/repository'

const axiosRepository = new AxiosRepository()
export const userUseCase = new UserUseCase(axiosRepository)
