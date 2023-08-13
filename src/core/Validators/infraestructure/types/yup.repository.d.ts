import { InferType } from 'yup'
import { createUserSchema, editUserSchema, loginSchema } from '../schemas'
export type ILoginForm=InferType<typeof loginSchema>
export type ICreateUserForm=InferType<typeof createUserSchema>
export type IEditUserForm=InferType<typeof editUserSchema>
