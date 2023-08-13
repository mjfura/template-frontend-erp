import { ValidatorUseCase } from '../application/index.useCase'
import { YupRepository } from './repository/yup.repository'

const yupRepository = new YupRepository()
const validatorUseCase = new ValidatorUseCase(yupRepository)
export const loginResolver = validatorUseCase.loginValidator()
export const createUserResolver = validatorUseCase.createUserValidator()
export const editUserResolver = validatorUseCase.editUserValidator()
