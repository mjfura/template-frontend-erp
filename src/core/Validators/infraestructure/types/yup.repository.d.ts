import { InferType } from 'yup'
import { loginSchema } from '../dependencies'
export type ILoginForm=InferType<typeof loginSchema>
