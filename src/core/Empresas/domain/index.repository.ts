import { ErrorResponserValue, SuccessResponserValue } from '@/core/Responsers/domain'
import { EmpresaValue } from './index.value'

export interface EmpresaRepository{
    getInfoEmpresa:(subdominio:string)=>Promise<SuccessResponserValue<EmpresaValue>|ErrorResponserValue>
}
