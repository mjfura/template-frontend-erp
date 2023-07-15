import { InferType } from 'yup'
import { loginSchema } from '../schemas'
export type ILoginForm=InferType<typeof loginSchema>
