import { AuthUseCase } from '../application/index.useCase'
import { NextAuthRepository } from './repository'

const authRepository = new NextAuthRepository()
export const authUseCase = new AuthUseCase(authRepository)
