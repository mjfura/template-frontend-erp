import { ErrorResponserValue, SuccessResponserValue } from '@/core/Responsers/domain'
import { UserPayload, UserRepository, UserValue } from '../../domain'
import { api } from '@/config'
import axios, { AxiosError } from 'axios'
import { UserResponse } from '../types/responses/User.response'
import { createUsersAdapter } from '../adapters'

export class AxiosRepository implements UserRepository {
  async getUsersByEmpresa (idEmpresa: string): Promise<UserValue[] | ErrorResponserValue> {
    try {
      if (!idEmpresa) throw new Error('No se pudo obtener el subdominio')
      const { data } = await api.get(`/users/getUsersByEmpresa?idEmpresa=${idEmpresa}`)
      console.log('data ', data)
      const listResponse = data.data.usuarios as UserResponse[]
      console.log(listResponse)
      return createUsersAdapter(listResponse)
    } catch (e) {
      if (axios.isAxiosError(e)) {
        const error = e as AxiosError<{
        message: string
        title: string
        status: boolean
      }>
        console.log('error ', error)
        return {
          status: false,
          message: error.response?.data?.message ?? 'Ruta errónea',
          title: 'Error'
        }
      }
      const error = e as Error
      if (error.message) {
        return {
          status: false,
          message: error.message,
          title: 'Error'
        }
      }

      return {
        status: false,
        message: 'No se pudo obtener la lista de usuarios',
        title: 'Error'
      }
    }
  }

  async editUser (id: string, user: Partial<UserValue>) : Promise<SuccessResponserValue<{}> | ErrorResponserValue> {
    try {
      if (!id) throw new Error('No se envió el id del usuario')
      const { data } = await api.put('/users/editUser', {
        idUser: id,
        ...user
      })
      return data
    } catch (e) {
      if (axios.isAxiosError(e)) {
        const error = e as AxiosError<{
        message: string
        title: string
        status: boolean
      }>
        console.log('error ', error)
        return {
          status: false,
          message: error.response?.data?.message ?? 'Ruta errónea',
          title: 'Error'
        }
      }
      const error = e as Error
      if (error.message) {
        return {
          status: false,
          message: error.message,
          title: 'Error'
        }
      }

      return {
        status: false,
        message: 'No se pudo editar el usuario',
        title: 'Error'
      }
    }
  }

  async deleteUser (id: string) : Promise<SuccessResponserValue<{}> | ErrorResponserValue> {
    try {
      if (!id) throw new Error('No se envió el id del usuario')
      const { data } = await api.delete('/users/deleteUser?idUser=' + id)
      return data
    } catch (e) {
      if (axios.isAxiosError(e)) {
        const error = e as AxiosError<{
        message: string
        title: string
        status: boolean
      }>
        console.log('error ', error)
        return {
          status: false,
          message: error.response?.data?.message ?? 'Ruta errónea',
          title: 'Error'
        }
      }
      const error = e as Error
      if (error.message) {
        return {
          status: false,
          message: error.message,
          title: 'Error'
        }
      }

      return {
        status: false,
        message: 'No se pudo eliminar el usuario',
        title: 'Error'
      }
    }
  }

  async createUser (payload:UserPayload) : Promise<SuccessResponserValue<{}> | ErrorResponserValue> {
    try {
      const { data } = await api.post('/users/createUser', {
        ...payload
      })
      return data
    } catch (e) {
      if (axios.isAxiosError(e)) {
        const error = e as AxiosError<{
        message: string
        title: string
        status: boolean
      }>
        console.log('error ', error)
        return {
          status: false,
          message: error.response?.data?.message ?? 'Ruta errónea',
          title: 'Error'
        }
      }
      const error = e as Error
      if (error.message) {
        return {
          status: false,
          message: error.message,
          title: 'Error'
        }
      }

      return {
        status: false,
        message: 'No se pudo registrar el usuario',
        title: 'Error'
      }
    }
  }
}
