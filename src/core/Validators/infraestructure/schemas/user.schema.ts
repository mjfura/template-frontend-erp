import { object, string } from 'yup'

export const createUserSchema = object({
  correo: string().email('Correo inválido').required('Correo es requerido'),
  password: string().required('La contraseña es requerida').min(8, 'La contraseña debe tener al menos 8 caracteres').max(16, 'La contraseña debe tener máximo 16 caracteres'),
  nombres: string().required('Nombres es requerido'),
  apellidos: string().required('Apellidos es requerido'),
  permiso: string().oneOf(['1', '2']).required('El campo es requerido')
})
export const editUserSchema = object({
  correo: string().email('Correo inválido').required('Correo es requerido'),
  nombres: string().required('Nombres es requerido'),
  apellidos: string().required('Apellidos es requerido'),
  permiso: string().oneOf(['1', '2']).required('El campo es requerido')
})
