import { yupResolver } from '@hookform/resolvers/yup'

import { ValidatorRepository } from '../../domain'
import { loginSchema } from '../schemas'

export class YupRepository implements ValidatorRepository {
  loginValidator () {
    const loginResolver = yupResolver(loginSchema)
    return loginResolver
  }
}
