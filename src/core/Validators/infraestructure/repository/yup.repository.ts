import { yupResolver } from '@hookform/resolvers/yup'

import { ValidatorRepository } from '../../domain'
import { createUserSchema, editUserSchema, loginSchema } from '../schemas'

export class YupRepository implements ValidatorRepository {
  loginValidator () {
    const loginResolver = yupResolver(loginSchema)
    return loginResolver
  }

  createUserValidator () {
    const createUserResolver = yupResolver(createUserSchema)
    return createUserResolver
  }

  editUserValidator () {
    const editUserResolver = yupResolver(editUserSchema)
    return editUserResolver
  }
}
