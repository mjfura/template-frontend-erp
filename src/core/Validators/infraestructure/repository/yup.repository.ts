import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { ValidatorRepository } from '../../domain'

export class YupRepository implements ValidatorRepository {
  loginValidator () {
    const loginSchema = object({
      email: string().email('Email inválido').required('Email es requerido'),
      password: string().required('La contraseña es requerida').min(8, 'La contraseña debe tener al menos 8 caracteres').max(16, 'La contraseña debe tener máximo 16 caracteres')
    })
    const loginResolver = yupResolver(loginSchema)
    return {
      loginResolver,
      loginSchema
    }
  }
}
