import { ErrorResponserValue, SuccessResponserValue } from '@/core/Responsers/domain'
import { LoginCredentialsValue } from './index.value'

export interface AuthRepository{
    login:(credentials:LoginCredentialsValue, basePath:string)=>Promise<SuccessResponserValue<any>|ErrorResponserValue>,
    logout:()=>Promise<undefined>
}
