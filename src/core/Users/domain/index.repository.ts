import { ErrorResponserValue, SuccessResponserValue } from '@/core/Responsers/domain'
import { UserValue } from './index.value'
import { UserPayload } from './index.entity'

export interface UserRepository{
    getUsersByEmpresa:(idEmpresa:string)=>Promise<UserValue[]|ErrorResponserValue>
    editUser:(id:string, user:Partial<UserValue>)=>Promise<SuccessResponserValue<{}>|ErrorResponserValue>
    deleteUser:(id:string)=>Promise<SuccessResponserValue<{}>|ErrorResponserValue>
    createUser:(user:UserPayload)=>Promise<SuccessResponserValue<{}>|ErrorResponserValue>
}
