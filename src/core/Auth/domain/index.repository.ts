import { ErrorResponserValue, SuccessResponserValue } from '@/core/Responsers/domain'
import { LoginCredentialsValue } from './index.value'

export interface AuthRepository{
    login:(credentials:LoginCredentialsValue)=>Promise<SuccessResponserValue<any>|ErrorResponserValue>
}
