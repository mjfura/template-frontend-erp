import { Resolver } from 'react-hook-form'
import { LoginValidatorEntity } from './index.entity'

export interface ValidatorRepository{
    loginValidator():Resolver<LoginValidatorEntity>
}
