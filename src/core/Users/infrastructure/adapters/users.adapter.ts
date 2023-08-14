import { UserValue } from '../../domain'
import { UserResponse } from '../types/responses/User.response'

export const createUserAdapter = (response:UserResponse):UserValue => {
  return {
    id: response.id,
    nombres: response.nombre + ' ' + response.apellido,
    nombre: response.nombre,
    apellido: response.apellido,
    correo: response.correo,
    permiso: response.permiso,
    photo: response.photo,
    lastLogin: response.lastLogin ? new Date(response.lastLogin) : 'Sin definir',
    creado: new Date(response.creado),
    modificado: new Date(response.modificado)

  }
}
export const createUsersAdapter = (response:UserResponse[]):UserValue[] => {
  return response.map(createUserAdapter)
}
